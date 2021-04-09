const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/token'
})
const { bookValidator } = require('../../validators/validator')
const { generateToken } = require('../../../core/utils')
const { Auth } = require('../../../middlewares/auth')


// router.post('/latest', new Auth().m, async (ctx, next) => {
router.post('/take', async (ctx, next) => {
    const v = await bookValidator.InitbookValidator(ctx)
    console.log(ctx.request.body)
    const token = generateToken(ctx.request.body.account)
    ctx.body = token
})

router.post('/verify', async (ctx, next) => {
    const result = Auth.verifyToken(ctx.request.body.token)
    ctx.body = {
        result
    }
})
module.exports = router