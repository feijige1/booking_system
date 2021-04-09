const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Bedproject } = require('../../models/bedProject')

router.post('/allproject', async (ctx, next) => {
    const obj = ctx.request.body.obj
    const classTime = ctx.request.body.classTime
    const classStyle = ctx.request.body.classStyle
    const date = ctx.request.body.date
    await Bedproject.destroy({
        where: {
            classStyle,
            date,
            classTime
        }
    }).then(async () => {
        const result = await Bedproject.bulkCreate(obj)
        if (result) {
            ctx.body = 'all set success'
        }
    })








})

module.exports = router