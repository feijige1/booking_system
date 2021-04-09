const { sequelize: db } = require('../../core/db') //实例
const { Sequelize, Model } = require('sequelize')

class Student extends Model {

}

Student.init({
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    stuName: Sequelize.STRING,
    stuNum: Sequelize.BIGINT,
    stuClass: Sequelize.STRING,
    stuHour: Sequelize.BIGINT,
    state: Sequelize.INTEGER
}, { sequelize: db })

module.exports = {
    Student
}