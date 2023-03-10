const express = require('express');
const app = express();
const db = require('./models/db');
const users = require('./models/users');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');


app.listen(3000, () => { //selecionando a porta para iniciar o sevidor
    console.log('Servidor rodando na porta 3000');
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/client/index.html')
})



app.use(express.static(__dirname + '/css'));//exportar coisas que estão na pasta(css por exemplo)
app.use(express.static(__dirname + '/img'));// exportat as imagens

app.use(express.static('client'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());

app.use(cookieParser('danilo'));
app.use(session({
  secret : 'dan',
  cookie : {maxAge: 6000},
  resave : true,
  saveUninitialized : true
}));
app.use(flash());




app.post('/cadastro', function (req, res) {
    users.create({
        nome: req.body.nome,
        email: req.body.email,
        genero: req.body.genero,
        senha: req.body.senha
    }).then(function () {
        res.sendFile(__dirname + "/client/final-index.html")
    }).catch(function (erro) {
        res.send("ERRO:" + erro)
    })

});





const mysql = require('mysql2');
const { Cookie } = require('express-session');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
  });
   
  // Rota de login
  app.post('/login', (req, res) => {
    const { nome, senha } = req.body;
    const sql = `SELECT * FROM logins WHERE nome='${nome}' AND senha='${senha}'`;
  
    // Consulta ao banco de dados
    connection.query(sql, (error, results) => {
      if (error) throw error;
  
      // Verifica se o usuário foi encontrado
      if (results.length > 0) {
        res.sendFile(__dirname + '/client/final-login.html')
      } else {
        res.status(401).sendFile(__dirname + '/client/login-erro.html');
      }
    });
  });
  






