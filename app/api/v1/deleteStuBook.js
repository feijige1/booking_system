//学生端取消预约
const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/delete'
})

const { Book } = require('../../models/book')

router.post('/stubook', async (ctx, next) => {
    const id = ctx.request.body.id
    console.log(id)
    if (id) {
        const result = await Book.destroy({
            where: {
                id
            }
        })
        ctx.body = result
    }

})

module.exports = router