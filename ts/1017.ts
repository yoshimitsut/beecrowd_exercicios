import * as fs from 'fs';
var input: string = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines: string[] = input.trim().split(/\s+/);

const horas: number = Number(lines[0]);
const velocidade: number = Number(lines[1]);
const qtdLitros: number = (velocidade / 12) * horas;

console.log(qtdLitros.toFixed(3));