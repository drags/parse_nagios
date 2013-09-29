var fs = require('fs');
var parse = require('./parser/services.js');

console.log(process.argv);

var files = process.argv.slice(2);

files.forEach(function(file){
	var dat = fs.readFileSync(file, 'utf8');
	var out = parse.parse(dat);
	console.log(out);
});
