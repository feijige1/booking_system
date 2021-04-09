//网页局部刷新数据(切换上课时间时触发)
const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router()
const { Book } = require('../../models/book')
const { Signin } = require('../../models/signIn')
const { Signinstu } = require('../../models/signstu')
router.get('/v1/get/signin', async (ctx, next) => {
    const stuId = ctx.request.query.stuId
    const overDue = ctx.request.query.overDue
    const Bookres = await Book.findAll({
        where: {
            stuId,
            // overDue: 0
        },
        attributes: [
            'classStyle',
            'classTime',
            'date',

        ]
    })
    const Signinres = await Signin.findAll({
        where: {
            overDue
        },
        attributes: [
            'id',
            'classStyle',
            'classTime',
            'date',
            'spsw',
            'updatedAt'
        ]
    })
    const Signinstures = await Signinstu.findAll({
        where: {
            stuId,

        }
    })
    ctx.body = {
        Bookres,
        Signinres,
        Signinstures
    }
})


module.exports = router
