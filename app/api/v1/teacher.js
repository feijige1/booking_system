const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/teacher'
})
const { Teacher } = require('../../models/teacher')
const { NotEmptyValidator, StudentloginValidator } = require('../../validators/validator')

router.get('/verify', async (ctx, next) => {
    let teaName = ctx.request.query.teaName
    let passWord = ctx.request.query.passWord
    if (teaName && passWord) {
        const result = await Teacher.findOne({
            where: {
                teaName,
                passWord
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