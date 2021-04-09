const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/delete'
})

const { Classtimesetting } = require('../../models/Classtimesetting')

router.get('/time', async (ctx, next) => {
    const id = ctx.request.query.id
    const result = await Classtimesetting.destroy({
        where: {
            id
        }
    })
    ctx.body = result
})

module.exports = router