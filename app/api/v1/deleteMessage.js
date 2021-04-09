const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/delete'
})

const { Message } = require('../../models/message')

router.get('/message', async (ctx, next) => {
    const stuNum = ctx.request.query.stuNum
    const result = await Message.destroy({
        where: {
            stuNum
        }
    })
    ctx.body = result
})

module.exports = router