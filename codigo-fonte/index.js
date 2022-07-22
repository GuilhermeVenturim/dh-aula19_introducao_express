/*Importando o módulo express*/

let Express = require('express');

/*Iniciando o express no projeoto Node.js*/

let Aplicativo = new Express();

/*Rota */

Aplicativo.get('/', (req, res) => res.send('Hello world!'))

/*Configurei a porta de acesso ao servidor */

Aplicativo.listen(1911, () => console.log('Servidor iniciado...'));




