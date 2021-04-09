const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class Message extends Model {

}

Message.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    stuNum: {
        type: Sequelize.BIGINT
    },
}, { sequelize })

module.exports = { Message }