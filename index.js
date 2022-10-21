const express = require('express'); //adicionando o EXPRESS
const app = express(); //fazendo o app para o express funcionar e rodar HTML
const path = require('path');
const router = express.Router();//proporcionando rotas
const bodyParser = require('body-parser');//adicionando body-parser
const login = require('./models/Login');//fazendo que o "login" inicie tambem
const db = require('./models/db');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())




app.get("/", function (req, res) { //o localhost vai começar com o html selecionado
    res.sendFile(__dirname + '/client/loginpage.html')
})

app.use(express.static(__dirname + '/client'));//exportar coisas que estão na pasta(css por exemplo)
app.use(express.static(__dirname + '/images'));// exportat as imagens




//mapeando com o sequelize
app.post('/cadastro', function (req, res) {
    login.create({  //mapeando todos os campos graças aos "names" do HTML
        nome: req.body.name,
        sobrenome: req.body.lastname,
        email: req.body.email,
        genero: req.body.gener,
        senha: req.body.password
    }).then(function () {
        res.sendFile(path.join(__dirname + '/client/final.html'))//se for confimar, vai mandar a essa pag
    }).catch(function (err) {
    })
});


app.listen(3000, () => { //selecionando a porta para iniciar o sevidor
    console.log('Servidor rodando na porta 3000');
});


