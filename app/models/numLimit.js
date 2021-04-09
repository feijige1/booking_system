const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class Numlimit extends Model {

}

Numlimit.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    bedNum: {
        type: Sequelize.INTEGER,
    },
    numLimit: {
        type: Sequelize.INTEGER
    },
    classStyle: {
        type: Sequelize.INTEGER
    },
    classTime: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.STRING,
    }
}, { sequelize })

module.exports = { Numlimit }