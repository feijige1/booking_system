const { sequelize: db } = require('../../core/db') //实例
const { Sequelize, Model } = require('sequelize')

class Signin extends Model {

}

Signin.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    spsw: Sequelize.BIGINT,
    classStyle: Sequelize.INTEGER,
    classTime: Sequelize.STRING,
    overDue: Sequelize.INTEGER,
    date: Sequelize.STRING
}, { sequelize: db })

module.exports = {
    Signin
}