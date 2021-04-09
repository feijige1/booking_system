const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Classtimesetting } = require('../../models/classtimesetting')

router.post('/time', async (ctx, next) => {
    const classStyle = ctx.request.body.classStyle
    const timeSetting = ctx.request.body.timeSetting
    const date = ctx.request.body.date
    const ifDelete = ctx.request.body.ifDelete
    if (classStyle && timeSetting && date) {
        const classtimesetting = {
            classStyle,
            timeSetting,
            ifDelete,
            date
        }
        await Classtimesetting.create(classtimesetting)
        ctx.body = 'Time set successfully'
    } else {
        ctx.body = 'Time set failful'
    }
})

module.exports = router