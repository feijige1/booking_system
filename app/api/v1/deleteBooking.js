//学生端取消预约
const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/mybook'
})

const { Book } = require('../../models/book')

router.post('/delete', async (ctx, next) => {
    const id = ctx.request.body.id
    const result = await Book.destroy({
        where: {
            id
        }
    })
    ctx.body = result
})

module.exports = router