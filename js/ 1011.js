var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const r = Number(lines[0]);
const pi = 3.14159
const volume = (4/3) * pi * (r * r * r);

console.log(`VOLUME = ${volume.toFixed(3)}`);