//网页局部刷新数据(切换上课时间时触发)
const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router()
const { Book } = require('../../models/book')
const { Student } = require('../../models/student')
router.get('/v1/refresh2/latest', async (ctx, next) => {
    const date = ctx.request.query.date
    const classTime = ctx.request.query.classTime
    const classStyle = ctx.request.query.classStyle
    Book.belongsTo(Student, {
        foreignKey: 'stuId',
        targetKey: 'id'
    })
    const result = await Book.findAll({
        where: {
            classTime,
            classStyle,
            date,
        },
        include: [{
            model: Student,
        }],

    })
    ctx.body = result
})


module.exports = router
