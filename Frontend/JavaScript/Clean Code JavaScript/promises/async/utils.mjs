import fs from 'fs';
import path from 'path';

async function writeToFile(filename, data) {
  try {
    const __dirname = path.dirname(new URL(import.meta.url).pathname); // Get the directory name using import.meta.url
    const filePath = path.join(__dirname, filename); // Get the full path of the file
    console.log(filePath);

    await fs.promises.writeFile(filePath, data);
    console.log('File written');
  } catch (error) {
    console.error(error);
  }
}

async function fetchTextData(url) {
  try {
    const response = await fetch(url);

    console.log('Server response status code:', response.status);
    console.log('Server response OK:', response.ok);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndWriteToFile(url, fileName) {
  try {
    const text = await fetchTextData(url);
    if (text) await writeToFile(fileName, text);
    console.log('Data was received and written to the file!😻');
  } catch (error) {
    console.error(error);
  }
}

export { writeToFile, fetchTextData, fetchAndWriteToFile };
