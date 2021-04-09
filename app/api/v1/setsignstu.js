const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Signinstu } = require('../../models/signstu')

router.post('/signinstu', async (ctx, next) => {

    const stuId = ctx.request.body.stuId
    const signId = ctx.request.body.signId
    const overDue = ctx.request.body.overDue
    const date = ctx.request.body.date
    if (stuId && signId && date) {
        const data = {
            stuId,
            signId,
            overDue,
            date
        }
        await Signinstu.create(data)
        ctx.body = 'student signing in successfully'
    }






})

module.exports = router