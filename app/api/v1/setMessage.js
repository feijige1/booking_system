const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Message } = require('../../models/message')

router.post('/message', async (ctx, next) => {
    const message = ctx.request.body.message
    const stuNum = ctx.request.body.stuNum
    if (stuNum) {
        const data = {
            message,
            stuNum
        }
        await Message.create(data)
        ctx.body = 'Time set successfully'
    } else {
        ctx.body = 'Time set failful'
    }
})

module.exports = router