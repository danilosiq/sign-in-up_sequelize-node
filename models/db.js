const Sequelize = require ('sequelize');//adicionando sequelize

const sequelize = new Sequelize('web', 'root','danilo1.',{ // Nome da database | nome do usuario | Senha
    host: 'localhost', //escolhendo o host, nesse local é o LOCAL
    dialect:'mysql' //escolhendo o Banco que vou usar
});//conectando o sequelize com o mysql

sequelize.authenticate().then(function(){//vendo se esta tudo certo
    console.log('conexão com sucesso');
}).catch(function(err){
    console.log('ERRO:' + err);
})

module.exports = {//exportanto o sequelize para outros .js
    sequelize: sequelize,
    Sequelize: Sequelize};