const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Signin } = require('../../models/signIn')

router.post('/signin', async (ctx, next) => {

    const classStyle = ctx.request.body.classStyle
    const classTime = ctx.request.body.classTime
    const spsw = ctx.request.body.spsw
    const overDue = ctx.request.body.overDue
    const date = ctx.request.body.date
    const result = await Signin.findOne({
        where: {
            classStyle,
            classTime,
            date
        }
    })
    if (result) {

        ctx.body = 'signIn set unsuccessfully'

    } else {
        if (classStyle && classTime && spsw && date) {
            const signData = {
                spsw,
                classStyle,
                classTime,
                overDue,
                date
            }
            await Signin.create(signData)
            ctx.body = 'signIn set successfully'
        }
    }





})

module.exports = router