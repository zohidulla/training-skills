import { fetchAndWriteToFile } from './utils.mjs';

const url = 'https://en.wikipedia.org/wiki/Robert_Cecil_Martin';

fetchAndWriteToFile(url, 'article.html');
