var fs = require('fs');
var argparse = require('argparse').ArgumentParser;
var parse = require('./parser/services.js');

var argp = new argparse({
	version: '0.0.1',
	addHelp: true,
	description: 'Parse Nagios configuration'
});
argp.addArgument(['-j', '--json'], { nargs: 0, help: 'Output as JSON' });
argp.addArgument(['files'], { action: 'append', help: 'Files to process' });
var args = argp.parseArgs();
console.dir(args)

var files = args.files
files.forEach(function(file){
	var dat = fs.readFileSync(file, 'utf8');
	var out = parse.parse(dat);
	if (args.json) {
		var out = JSON.stringify(out);
	}
	console.log(out);
});
