import * as fs from 'fs';
var input: string = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines: string[] = input.trim().split(/\s+/);

const x1: number = Number(lines[0]);
const y1: number = Number(lines[1]);
const x2: number = Number(lines[2]);
const y2: number = Number(lines[3]);

const distancia: number = Math.sqrt(
    ((x2 - x1)** 2) + ((y2 - y1)** 2)
);

console.log(`${distancia.toFixed(4)}`);