//小程序出发刷新页面数据接口
const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router()
const { PositiveIntegerValidator } = require('../../validators/validator')
const { Book } = require('../../models/book')
router.get('/v1/refresh/latest', async (ctx, next) => {
    const date = ctx.request.query.date
    const classTime = ctx.request.query.classTime
    console.log(classTime)
    const result = await Book.findAll({
        attributes:
            [
                'bedNum',
                'stuId',
                [sequelize.fn('INET6_NTOA', sequelize.col('id')), 'count']
            ],
        where: {
            classTime,
            date,
        },
    })
    // console.log(result)
    // const length = result.length
    // for (var i = 0; i < length; i++) {
    //     console.log(result[i].id)
    //     console.log(result[i].bedNum)
    //     console.log(result[i].stuId)
    //     console.log(result[i].classTime)
    //     console.log(result[i].date)
    //     console.log('   ')
    // }

    // const v = await new PositiveIntegerValidator().validate(ctx) //校验前端参数
    // const id = v.get('path.id', parsed = false)//false的作用是保留获取的id值为字符串格式
    // console.log('id' + id)
    ctx.body = result
})


module.exports = router
