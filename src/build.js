const fs = require('fs');
const yaml = require('yaml');
const hb = require('handlebars')

const templatesPath = '../res/templates';
const pagesDataPath = '../res/data';
const outputPath = '../public';

const renderPage = (templatePath, dataPath, outputPath) => {
  const templateString = fs.readFileSync(templatePath, 'utf8')
  const template = hb.compile(templateString);

  const dataString = fs.readFileSync(dataPath, 'utf8');
  const data = yaml.parse(dataString);

  const renderedPage = template(data);

  fs.writeFileSync(outputPath, renderedPage, 'utf8');

  return data;
}

const pagesData = renderPage(
  `${templatesPath}/index.html.hbs`,
  '../res/pages.yaml',
  `${outputPath}/index.html`
);

pagesData['pages'].forEach(page => renderPage(
  `${templatesPath}/${page.name}.html.hbs`,
  `${pagesDataPath}/${page.content}`,
  `${outputPath}//${page.name}.html`
));
