#!/usr/bin/env node

'use strict';

/** required libraries, including ./cash.js file */
const Conf = require('conf');
const meow = require('meow');
const chalk = require('chalk');
const cash = require('./cash.js');

const config = new Conf();
const argv = process.argv.slice(2);

/** required library ./constants for saving configuration */
const {DEFAULT_TO_CURRENCIES} = require('./constants');

/** Usage of cash command */

const cli = meow(`
	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--set -s 			Set default currencies
	Examples
		$ cash 10 usd eur pln
		$ cash --set usd aud
`);

/** when we spot a `--save` or `-s` in the command, save the following currency in ./constants */
if (argv.indexOf('--save') !== -1 || argv.indexOf('-s') !== -1) {
	config.set('defaultFrom', argv[1] || config.get('defaultFrom', 'USD'));
	config.set('defaultTo', (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', DEFAULT_TO_CURRENCIES));
	console.log(chalk.green('Saved default currencies to ' + config.path));
	process.exit(0);
}

/**
 * understaning the command, giving various parts of it names
 * @param {string} amount - amount of money
 * @param {string} from - currency to convert from
 * @param {string} to - currency to convert to
 */
const command = {
	amount: parseFloat(argv[0]) || 1,
	from: argv[1] || config.get('defaultFrom', 'USD'),
	to: (argv.length > 2) ? process.argv.slice(4) : config.get('defaultTo', DEFAULT_TO_CURRENCIES)
};

cash(command);
