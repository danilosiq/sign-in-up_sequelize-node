const express = require('express');
const app = express();
const db = require('./models/db');
const users = require('./models/users');
const bodyParser = require('body-parser');
const passport = require('./config/auth')



app.listen(3000, () => { //selecionando a porta para iniciar o sevidor
    console.log('Servidor rodando na porta 3000');
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/client/index.html')
})

app.use(express.static(__dirname + '/css'));//exportar coisas que estão na pasta(css por exemplo)
app.use(express.static(__dirname + '/img'));// exportat as imagens
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())





app.post('/cadastro', function (req, res) {
    users.create({
        nome: req.body.nome,
        email: req.body.email,
        genero: req.body.genero,
        senha: req.body.senha
    }).then(function () {
        res.sendFile(__dirname + "/client/final.html")
    }).catch(function (erro) {
        res.send("ERRO:" + erro)
    })

});

app.post('/cadastro', (req, res) => {
    const username = req.body.nome;
    const password = req.body.senha;
    
  });



