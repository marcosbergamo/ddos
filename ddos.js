#!/usr/bin/env node

var args = process.argv;

console.log('Seus argumentos: '+args);

var args2 = args.slice(2);

console.log('hello '+args2[0]);
