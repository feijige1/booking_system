const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Student } = require('../../models/student')

router.get('/ifforbid', async (ctx, next) => {
    const id = ctx.request.query.id
    console.log(id)
    if (id) {
        const result = await Student.findOne({
            where: {
                id
            },
        })
        ctx.body = result
    }
})

module.exports = router