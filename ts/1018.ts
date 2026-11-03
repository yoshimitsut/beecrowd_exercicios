import * as fs from 'fs';
var input: string = require('fs').readFileSync('/dev/stdin', 'utf8');

let v:number = Number(input.trim());
const valorOriginal: number = v;

const notas: number[] = [100, 50, 20, 10, 5, 2, 1];

console.log(valorOriginal);

for  (const nota of notas) {
    const quantidade: number = Math.floor(v /nota);

    console.log(`${quantidade} nota(s) de R$ ${nota},00`);

    v = v % nota;
}

