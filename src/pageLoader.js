/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { readFile, writeFile } from 'node:fs/promises';
import axios from 'axios';

// TO utils?
function convertUrl(url) {
  const { host, pathname } = new URL(url);
  return host
    .concat(pathname)
    .replace(/[/\W_]/g, '-')
    .concat('.html');
}

export default async function pageLoader(url, output = null) {
  // To Promises
  const { data } = await axios.get(url);
  const path =
    output === null
      ? process.cwd().concat(`/${convertUrl(url)}`)
      : process.cwd().concat(`${output}/${convertUrl(url)}`);
  const createFile = await writeFile(path, data);
  const file = await readFile(convertUrl(url), { encoding: 'utf8' });

  console.log(file);
}
