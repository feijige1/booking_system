const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/student'
})
const { Student } = require('../../models/student')
const { NotEmptyValidator, StudentloginValidator } = require('../../validators/validator')

router.post('/verify', async (ctx, next) => {
    const ifEmpty = StudentloginValidator.NotEmpty(ctx.request.body)
    let stuName = ctx.request.body.stuName
    let stuNum = ctx.request.body.stuNum
    console.log(stuName, stuNum)
    console.log('--------------------------------------')
    if (ifEmpty) {
        const result = await Student.findOne({
            where: {
                stuName,
                stuNum
            }
        })
        ctx.body = {
            result
        }
    } else {
        ctx.body = '学号或姓名不能为空'
    }

})

module.exports = router