const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Numlimit } = require('../../models/numLimit')

router.post('/numlimit', async (ctx, next) => {
    const bedNum = ctx.request.body.bedNum
    const numLimit = ctx.request.body.numLimit
    const classStyle = ctx.request.body.classStyle
    const classTime = ctx.request.body.classTime
    const date = ctx.request.body.date
    const result = await Numlimit.findOne({
        where: {
            bedNum,
            classTime,
            date
        }

    })
    if (result) {
        await Numlimit.update({
            numLimit
        }, {
            where: {
                bedNum,
                classTime,
                date
            }
        }
        ).then(() => {
            ctx.body = 'NumLimit set successfully'
        })

    } else {
        if (bedNum && classTime && date) {
            const numlimit = {
                bedNum,
                numLimit,
                classStyle,
                classTime,

                date
            }
            await Numlimit.create(numlimit)
            ctx.body = 'NumLimit set successfully'
        }
    }




})

module.exports = router