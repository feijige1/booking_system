const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Numlimit } = require('../../models/numLimit')

router.get('/numLimit', async (ctx, next) => {
    const date = ctx.request.query.book_date
    // console.log(date)
    if (date) {
        const result = await Numlimit.findAll({
            where: {
                date
            },
            attributes: [
                'bedNum',
                'numLimit',
                'classTime'
            ],
        })
        ctx.body = result
    }
})

module.exports = router