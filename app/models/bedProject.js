const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class Bedproject extends Model {

}

Bedproject.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    projectName: {
        type: Sequelize.STRING
    },
    bedNum: {
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

module.exports = {
    Bedproject
}