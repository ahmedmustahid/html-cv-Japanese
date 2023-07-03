const handlebars = require('handlebars');
const fs = require('fs-extra');
const markdownHelper = require('./utils/helpers/markdown');
const templateData = require('./metadata/metadata');
const Puppeteer = require('puppeteer');
const getSlug = require('speakingurl');
const dayjs = require('dayjs');
const repoName = require('git-repo-name');
const username = require('git-username');

const srcDir = __dirname;
console.log(srcDir)
const outputDir = __dirname + '/../dist';
console.log(outputDir)

// Clear dist dir
fs.emptyDirSync(outputDir);

// Copy assets
fs.copySync(srcDir + '/assets', outputDir);

// Build HTML
handlebars.registerHelper('markdown', markdownHelper);
const source = fs.readFileSync(srcDir + '/templates/index.html', 'utf-8');
const template = handlebars.compile(source);
console.log(`${templateData.name}`);
console.log(`${getSlug(templateData.name)}}`);
//const pdfFileName = `${getSlug(templateData.name)}.${getSlug(templateData.title)}.pdf`;
const pdfFileName ='ahmedmustahid-jp.pdf';
const html = template({
  ...templateData,
  baseUrl: `https://${username()}.github.io/${repoName.sync()}`,
  pdfFileName,
  updated: dayjs().format('MMMM D, YYYY'),
});
fs.writeFileSync(outputDir + '/index.html', html);
buildPdf = async function (inputFile, outputFile) {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });

  console.log(`${outputFile}`);
  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: {
      top: '2.54cm',
      right: '2.54cm',
      bottom: '2.54cm',
      left: '2.54cm',
    },
  });
  await browser.close();
};

console.log(`${outputDir}/${pdfFileName}`);
// Build PDF
buildPdf(`${outputDir}/index.html`, `${outputDir}/${pdfFileName}`);
