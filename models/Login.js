const db = require('./db')//exportando o db(sequelize)



const Login = db.sequelize.define('logins',{//mapeando as tabelas do banco
    id: {
        type: db.Sequelize.INTEGER,//algo que nao se muda
        autoIncrement: true,//auto-incrementavel
        primaryKey: true//chave primaria
    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false //nao pode ser nulo
    },
    sobrenome:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    genero:{
        type: db.Sequelize.STRING,
        allowNull: false
    },
    senha:{
        type:db.Sequelize.STRING,
        allowNull: false
    }


})
//Login.sync({force: true}) // para excluir qualquer tabela e criar uma nova por cima
module.exports = Login