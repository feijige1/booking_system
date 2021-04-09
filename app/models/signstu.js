const { sequelize: db } = require('../../core/db') //实例
const { Sequelize, Model } = require('sequelize')

class Signinstu extends Model {

}

Signinstu.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    stuId: Sequelize.INTEGER,
    signId: Sequelize.INTEGER,
    overDue: Sequelize.INTEGER,
    date: Sequelize.STRING
}, { sequelize: db })

module.exports = {
    Signinstu
}