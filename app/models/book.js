const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class Book extends Model {

}

Book.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    // bedId: {
    //     type: Sequelize.INTEGER
    // },
    bedNum: {
        type: Sequelize.INTEGER
    },
    stuId: {
        type: Sequelize.BIGINT,
    },
    classTime: {
        type: Sequelize.STRING
    },
    classStyle: {
        type: Sequelize.INTEGER
    },
    startTime: {
        type: Sequelize.INTEGER
    },
    overDue: {
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.STRING,
    }
}, { sequelize })

module.exports = {
    Book
}