# cash

cash is a currency converter

## Installation

Clone the repository:

`$ git clone https://github.com/Nirailay/3-musketeers.git`

Enter the cash directory:

`$ cd 3-musketeers/cash/`

Update and install dependencies:

`npm i`

Use *cash*:

`node bin/index.js`

(Optionally) create a script to call in your path
  
`vim /usr/local/bin/cash.sh` :

```
!/usr/bin/bash

node /path/to/3-musketeers/cash/bin/index.js
```

## Usage

`cash.sh --help`:
```
  Usage
  	$ cash <amount> <from> <to>
  	$ cash <options>
  Options
  	--set -s 			Set default currencies
  Examples
  	$ cash 10 usd eur pln
  	$ cash --set usd aud
```
 is a good start.
 
 `cash` converts money from currencies
 
 - `<amount>`: represents the amount of money to converts. It should be a number
 - `<from>`: represents the currency the `<amount>` of money is in. It should be one currency
 - `<to>`: represents the currency to convert the `<amount>` of money to. It should be at least one currency, or several.
 
 For example the `$ cash 10 usd eur pln` command can be deconstructed as:
 - `<amount> = 10`
 - `<from> = usd`
 - `<to> = eur, pln`
 
 So we convert *10 USD* in *EUR* and *PLN*.

---

`cash --save|-s <currency` can be used to change the default currency to use as `<from>` when none is given

For example the `$ cash --save eur` changes the default currency to EUR.
