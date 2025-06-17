import https from 'https';
import fs from 'fs';

https
  .get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', (response) => {
    let body = '';

    response.on('data', (chunk) => {
      // console.log('Data event');
      body += chunk;
    });

    response.on('end', () => {
      fs.writeFile('article.html', body, (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
        } else {
          console.log('File written');
        }
      });
    });
  })
  .on('error', (requestErr) => {
    console.error(requestErr);
  });
