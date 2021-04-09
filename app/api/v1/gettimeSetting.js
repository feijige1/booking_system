const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Classtimesetting } = require('../../models/Classtimesetting')

router.get('/time', async (ctx, next) => {
    const date = ctx.request.query.book_date
    // console.log(date)
    if (date) {
        const result = await Classtimesetting.findAll({
            where: {
                date
            },
            attributes: [
                'id',
                'classStyle',
                'timeSetting',
                'ifDelete',
                'date'
            ],
            order: [['timeSetting', 'DESC']],
        })
        ctx.body = result
    }
})

module.exports = router