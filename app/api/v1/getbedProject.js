const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Bedproject } = require('../../models/bedProject')

router.get('/bedProject', async (ctx, next) => {
    const date = ctx.request.query.book_date
    // console.log(date)
    if (date) {
        const result = await Bedproject.findAll({
            where: {
                date
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