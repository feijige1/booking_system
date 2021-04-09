//网页全局刷新数据(切换日期时触发)
const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router()
const { Book } = require('../../models/book')
const { Student } = require('../../models/student')
router.get('/v1/refresh3/latest', async (ctx, next) => {
    const date = ctx.request.query.book_date
    console.log(date)

    Book.belongsTo(Student, {
        foreignKey: 'stuId',
        targetKey: 'id'
    })
    const result = await Book.findAll({
        where: {
            date,
        },
        // attributes:
        //     [
        //         'bedNum',
        //         'stuId',
        //         [sequelize.fn('INET6_NTOA', sequelize.col('id')), 'count']
        //     ],
        include: [{
            model: Student,
        }],

    })
    ctx.body = result
})


module.exports = router
