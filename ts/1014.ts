import * as fs from 'fs';

var input: string = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines: string[] = input.trim().split(/\s+/);

const x: number = Number(lines[0]);
const y: number = Number(lines[1]);

const gasto: number = x / y;

console.log(`${gasto.toFixed(3)} km/l`);