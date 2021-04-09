const { sequelize: db } = require('../../core/db') //实例
const { Sequelize, Model } = require('sequelize')

class Teacher extends Model {

}

Teacher.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    teaName: Sequelize.STRING,
    passWord: Sequelize.Sequelize.STRING,
}, { sequelize: db })

module.exports = {
    Teacher
}