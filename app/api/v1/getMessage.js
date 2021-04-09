const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Message } = require('../../models/message')

router.get('/message', async (ctx, next) => {
    const stuNum = ctx.request.query.stuNum
    if (stuNum) {
        const result = await Message.findOne({
            where: {
                stuNum
            },
        })
        ctx.body = result
    }
})

module.exports = router