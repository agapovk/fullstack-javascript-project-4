/* eslint-disable no-unused-vars */
import { writeFile } from 'node:fs/promises'
import axios from 'axios'

export default async function pageLoader(url, output = process.cwd()) {
	// To Promises
	const { data } = await axios.get(url)

	const createFile = await writeFile(convertUrl(url), data)

	console.log('created?!')
}

// TO utils?
function convertUrl(url) {
	const { host, pathname } = new URL(url)
	return host
		.concat(pathname)
		.replace(/[/\W_]/g, '-')
		.concat('.html')
}
