const fs = require('fs');
const handlebars = require('handlebars')
const showdown = require('showdown')

const templatesPath = 'res/templates';
const pagesPath = 'res/pages';
const outputPath = 'public';

const pages = [];
const indexData = {
  pages: pages,
  currentYear: new Date().getFullYear()
};

const renderTemplate = (context, templatePath, renderingOutputPath) => {
  const templateString = fs.readFileSync(templatePath, 'utf8')
  const template = handlebars.compile(templateString);

  const renderedPage = template(context);
  fs.writeFileSync(renderingOutputPath, renderedPage);
};

const renderPage = (pageName) => {
  const markdownPath = `${pagesPath}/${pageName}.md`;
  const htmlOutPath = `${outputPath}/${pageName}.html`
  const templatePath = `${templatesPath}/page.html.hbs`;

  const pageString = fs.readFileSync(markdownPath, 'utf8');
  const converter = new showdown.Converter();
  converter.setOption('tables', true)

  // just make all headers 1 smaller
  converter.addExtension({
    type: 'output',
    regex: /(?<=[<\/)|]h)[1-9](?=.*?>)/g,
    replace: text => parseInt(text) + 1
  });

  const pageHtml = converter.makeHtml(pageString);

  const pageContext = { name: pageName, html: pageHtml }
  renderTemplate(pageContext, templatePath, htmlOutPath);

  pages.push(pageName);
};

const renderIndex = () => {
  const templatePath = `${templatesPath}/index.html.hbs`;
  const indexHtmlOutPath = `${outputPath}/index.html`

  renderTemplate(indexData, templatePath, indexHtmlOutPath);
};

renderPage('about');
renderPage('posts');
renderPage('projects');
renderPage('resume');
renderIndex();
