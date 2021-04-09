const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Numlimit } = require('../../models/numLimit')

router.get('/localnumLimit', async (ctx, next) => {
    const date = ctx.request.query.date
    const classStyle = ctx.request.query.classStyle
    const classTime = ctx.request.query.classTime
    // console.log(date)
    if (date && classStyle && classTime) {
        const result = await Numlimit.findAll({
            where: {
                classStyle,
                date,
                classTime
            },
            // attributes: [
            //     'bedNum',
            //     'numLimit',
            //     'classTime'
            // ],
        })
        ctx.body = result
    }
})

module.exports = router