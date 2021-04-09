const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { openDate } = require('../../models/dateopen')

router.get('/date', async (ctx, next) => {
    const result = await openDate.findAll({
        attributes: [
            'class1',
            'class2',
            'class3',
            'date'
        ]
    })
    ctx.body = result
})

module.exports = router