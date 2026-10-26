
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const nome = lines[0];
const salario = parseFloat(lines[1]);
const vendas = parseFloat(lines[2]);

const comissao = vendas * 0.15;
const total = salario + comissao;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);
