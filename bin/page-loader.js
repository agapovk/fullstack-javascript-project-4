#!/usr/bin/env node

import { Command } from 'commander'
import pageLoader from '../src/pageLoader.js'

const program = new Command()

program
	.description('Page loader utility')
	.version('1.0.1', '-V, --version', 'output the version number')
	.option('-o --output [dir]', 'output dir', process.cwd())
	.arguments('<url>')
	.action((url, option) => {
		pageLoader(url, option.output)
	})

program.parse()

// TODO:
// Выполните все необходимые приготовления (Github Actions, Code Climate, Eslint, добавьте бейджики в ридми).
// Напишите тесты (лучше до кода!).
// Добавьте в ридми аскинему с примером работы пакета.
