const { sequelize: db } = require('../../core/db') //实例
const { Sequelize, Model } = require('sequelize')

class openDate extends Model {

}

openDate.init({
    // id: {
    //     type: Sequelize.BIGINT,
    //     primaryKey: true,
    //     autoIncrement: true
    // },
    date: {
        primaryKey: true,
        type: Sequelize.STRING
    },
    class1: Sequelize.INTEGER,
    class2: Sequelize.INTEGER,
    class3: Sequelize.INTEGER,
}, { sequelize: db })

module.exports = {
    openDate
}