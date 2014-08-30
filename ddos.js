#!/usr/bin/env node

var args = process.argv.slice(2);

function maior(num1, num2){
  return num1 > num2 ? num1 : num2;
}

console.log(maior(args[0], args[1]));
