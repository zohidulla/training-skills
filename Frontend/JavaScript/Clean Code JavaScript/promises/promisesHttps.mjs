import https from 'https';
import fs from 'fs';
import path from 'path';

function fetchArticle(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let body = '';

        response.on('data', (chunk) => {
          body += chunk;
        });

        response.on('end', () => {
          resolve(body);
        });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

function writeToFile(filename, data) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname); // Get the directory name using import.meta.url
  const filePath = path.join(__dirname, filename); // Get the full path of the file
  console.log(filePath);
  return fs.promises.writeFile(filePath, data);
}

const url = 'https://en.wikipedia.org/wiki/Robert_Cecil_Martin';

fetchArticle(url)
  .then((body) => writeToFile('article.html', body))
  .then(() => {
    console.log('File written');
  })
  .catch((error) => {
    console.error(error);
  });
