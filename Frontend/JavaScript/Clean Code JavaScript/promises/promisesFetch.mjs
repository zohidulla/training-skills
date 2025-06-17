import fs from 'fs';
import path from 'path';

function writeToFile(filename, data) {
  const __dirname = path.dirname(new URL(import.meta.url).pathname); // Get the directory name using import.meta.url
  const filePath = path.join(__dirname, filename); // Get the full path of the file
  console.log(filePath);
  return fs.promises.writeFile(filePath, data);
}

function getTextFromResponse(response) {
  console.log('Server response status code:', response.status);
  console.log('Server response OK:', response.ok);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.text();
}

const url = 'https://en.wikipedia.org/wiki/Robert_Cecil_Martin';

fetch(url)
  .then(getTextFromResponse)
  .then((body) => writeToFile('article.html', body))
  .then(() => console.log('File written'))
  .catch((error) => console.error(error));
