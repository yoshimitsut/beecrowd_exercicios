import * as fs from 'fs';

var input:string = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines:string[] = input.trim().split(/\s+/);

const a: number = Number(lines[0]);
const b: number = Number(lines[1]);
const c: number = Number(lines[2]);

const maiorValor: number = Math.max(a, b, c);

console.log(`${maiorValor} eh o maior`);