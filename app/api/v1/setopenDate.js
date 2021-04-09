const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { openDate } = require('../../models/dateopen')

router.post('/opendate', async (ctx, next) => {
    const class1 = 1
    const class2 = 1
    const class3 = 1
    const date = ctx.request.body.date
    console.log(date)
    // await Bedproject.destroy({
    //     where: {
    //         classStyle,
    //         date,
    //         classTime
    //     }
    // }).then(async () => {
    //     const result = await Bedproject.bulkCreate(obj)
    //     if (result) {
    //         ctx.body = 'all set success'
    //     }
    // })
    const result = await openDate.bulkCreate(date, { updateOnDuplicate: ['class1'] })
    if (result) {
        ctx.body = 'all set success'
    }








})

module.exports = router