'use strict';

/** required libraries */
const got = require('got');
const money = require('money');
const chalk = require('chalk');
const ora = require('ora');
const currencies = require('../lib/currencies.json');

/** required library ./constants for saving configuration */
const {API} = require('./constants');

/**
 * @function command - main command to understand and process the provided command
 * @param {string} amount - amount of money
 * @param {string} from - currency to convert from
 * @param {string} to - currency to convert to
 */
const cash = async command => {
	const {amount} = command;
	const from = command.from.toUpperCase();
	const to = command.to.filter(item => item !== from).map(item => item.toUpperCase());

	console.log();
	const loading = ora({
		text: 'Converting...',
		color: 'green',
		spinner: {
			interval: 150,
			frames: to
		}
	});

	loading.start();

	await got(API, {
		json: true
	}).then(response => {
		money.base = response.body.base;
		money.rates = response.body.rates;

		to.forEach(item => {
			if (currencies[item]) {
				loading.succeed(`${chalk.green(money.convert(amount, {from, to: item}).toFixed(3))} ${`(${item})`} ${currencies[item]}`);
			} else {
				loading.warn(`${chalk.yellow(`The "${item}" currency not found `)}`);
			}
		});

		console.log(chalk.underline.gray(`\nConversion of ${chalk.bold(from)} ${chalk.bold(amount)}`));
	}).catch(error => {
		if (error.code === 'ENOTFOUND') {
			loading.fail(chalk.red('Please check your internet connection!\n'));
		} else {
			loading.fail(chalk.red(`Internal server error :(\n${error}`));
		}
		process.exit(1);
	});
};

module.exports = cash;
