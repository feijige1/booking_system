const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Numlimit } = require('../../models/numLimit')

router.post('/allnumlimit', async (ctx, next) => {
    const obj = ctx.request.body.obj
    const classTime = ctx.request.body.classTime
    const classStyle = ctx.request.body.classStyle
    console.log(classTime, '--------------------------')
    console.log(obj)
    const date = ctx.request.body.date
    await Numlimit.destroy({
        where: {
            classStyle,
            date,
            classTime
        }
    }).then(async () => {
        const result = await Numlimit.bulkCreate(obj)
        if (result) {
            ctx.body = 'all set success'
        }
    })








})

module.exports = router