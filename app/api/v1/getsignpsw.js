const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Signin } = require('../../models/signIn')

router.get('/signpsw', async (ctx, next) => {
    const classStyle = ctx.request.query.classStyle
    const classTime = ctx.request.query.classTime
    const date = ctx.request.query.date
    if (classStyle && classTime && date) {
        const result = await Signin.findOne({
            where: {
                classStyle,
                classTime,
                date
            }

        })
        ctx.body = result
    }


})

module.exports = router