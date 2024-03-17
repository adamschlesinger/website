const fs = require('fs');
const handlebars = require('handlebars')
const showdown = require('showdown')

const templatesPath = 'res/templates';
const pagesPath = 'res/pages';
const outputPath = 'public';

const pages = [];
const indexData = {
  'pages': pages,
  'currentYear': new Date().getFullYear()
};

const renderPage = (pageName) => {
  const pageMarkdownPath = `${pagesPath}/${pageName}.md`;
  const pageHtmlOutPath = `${outputPath}/${pageName}.html`

  const pageString = fs.readFileSync(pageMarkdownPath, 'utf8');
  const converter = new showdown.Converter();
  const pageHtml = converter.makeHtml(pageString);

  fs.writeFileSync(pageHtmlOutPath, pageHtml);
  pages.push(pageName);
};

const renderIndex = () => {
  const templatePath = `${templatesPath}/index.html.hbs`;
  const indexHtmlOutPath = `${outputPath}/index.html`

  const templateString = fs.readFileSync(templatePath, 'utf8')
  const template = handlebars.compile(templateString);

  const renderedPage = template(indexData);
  fs.writeFileSync(indexHtmlOutPath, renderedPage);
};

renderPage('about');
renderPage('posts');
renderPage('projects');
renderPage('resume');
renderIndex();
