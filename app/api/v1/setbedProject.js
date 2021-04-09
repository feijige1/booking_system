const Router = require('koa-router')

// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})

const { Bedproject } = require('../../models/bedProject')

router.post('/bedProject', async (ctx, next) => {
    const projectName = ctx.request.body.projectName
    const bedNum = ctx.request.body.bedNum
    const classStyle = ctx.request.body.classStyle
    const classTime = ctx.request.body.classTime
    const date = ctx.request.body.date
    const result = await Bedproject.findOne({
        where: {
            date,
            bedNum,
            classTime
        }
    })
    if (result) {
        await Bedproject.update({
            projectName
        }, {
            where: {
                bedNum,
                date,
                classTime
            }

        }).then(() => {
            ctx.body = 'Project set successfully'
        })
    } else {
        if (projectName && bedNum && classTime && date) {
            const data = {
                projectName,
                bedNum,
                classStyle,
                classTime,
                date
            }
            await Bedproject.create(data)
            ctx.body = 'Project set successfully'
        }
    }

})

module.exports = router