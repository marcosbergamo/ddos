#!/usr/bin/env node

var program = require('commander');

function list(val) {
  return val.split(',');
}

program
.version('0.1.0')
.option('hello <s>', 'Diga seu nome', String)
.option('maior <items>', 'Retorna o maior numero', list)
.parse(process.argv);


function maior(num1, num2){
  return num1 > num2 ? num1 : num2;
}

if(program.hello){
  console.log("Hello "+program.hello);
}

if(program.maior){
  console.log(maior(program.maior[0], program.maior[1]));
}
