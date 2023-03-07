const db = require('./db')

const users = db.sequelize.define('logins', { //mapenado as tabelas
    id: {
        allowNull: false,
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        //unique: true
    },

    genero: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
})

//Comando para tirar todos os usuarios ja cadastrados do banco
//users.sync({force: true})
module.exports = users

