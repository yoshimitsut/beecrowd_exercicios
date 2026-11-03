var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/);


var a = Number(lines[0]);
var b = Number(lines[1]);
var c = Number(lines[2]);

var maiorValor = Math.max(a, b, c);

console.log(`${maiorValor} eh o maior`);



//-------------------------------- de outra forma --------------------------------

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split(/\s+/);

var a = Number(lines[0]);
var b = Number(lines[1]);
var c = Number(lines[2]);

if (a > b && a > c) {
    console.log(`${a} eh maior`);
} else if (b > a && b > c) {
    console.log(`${b} eh maior`);
} else {
    console.log(`${c} eh maior`);
}
