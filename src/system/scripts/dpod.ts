/* eslint-disable no-console */
export {}; // fixes VSCode variable-checking in other files (ts2451)

// import DpodSiteBuilder from '../src/datapod/classes/dpodSiteBuilder';

const argv = require('minimist')(process.argv.slice(2));

console.log('===========================================================================');
console.log('DATAPOD COMMAND LINE INTERFACE');
console.log('===========================================================================');
if (argv._[0] === 'createPage') {
	// const { pageTitle } = argv;
	console.log('create page...');
	// DpodSiteBuilder.createPage(pageTitle);
} else {
    // npm run d01
    // npm run d01 -- help
    console.log('help\t\t\t\t\t\tnpm run dpod');
    console.log('create page \t\t\t\t\tnpm run dpod -- createPage --pageTitle "Monthly Reports"');
}