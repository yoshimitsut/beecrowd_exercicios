import * as fs from 'fs';
var input: string = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines: string[] = input.trim().split(/\s+/);


const x: number = Number(lines[0]);
const tempo: number = x * 2;

console.log(`${tempo} minutos`);