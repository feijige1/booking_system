//学生端取消预约
const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/delete'
})

const { openDate } = require('../../models/dateopen')

router.post('/opendate', async (ctx, next) => {
    const date = ctx.request.body.date
    if (date) {
        const result = await openDate.destroy({
            where: {
                date
            }
        })
        ctx.body = result
    }

})

module.exports = router