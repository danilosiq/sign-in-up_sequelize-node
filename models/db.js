//Colocando o Sequelize no nosso codigo em um arquivo separado
const Sequelize = require('sequelize');

const sequelize = new Sequelize('users', 'root', '', { //Identificando o banco
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function () { //identificando a conexão
    console.log('Conexão com sucesso');
}).catch(function (err) {
    console.log('ERRO:' + err);
})


module.exports = {//exportanto o sequelize para outros .js
    sequelize: sequelize,
    Sequelize: Sequelize};

    