const { sequelize } = require('../../core/db')
const { Sequelize, Model } = require('sequelize')

class Classtimesetting extends Model {

}

Classtimesetting.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    classStyle: {
        type: Sequelize.INTEGER
    },
    timeSetting: {
        type: Sequelize.STRING,
    },
    ifDelete: {
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.STRING,
    }
}, { sequelize })

module.exports = {
    Classtimesetting
}