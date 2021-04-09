const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/book'
})
const { Book } = require('../../models/book')
const { bookValidator } = require('../../validators/validator')

router.post('/latest', async (ctx, next) => {
    // const v = await bookValidator.InitbookValidator(ctx)
    // console.log("v=" + v)
    const bedNum = ctx.request.body.bedNum
    const stuId = ctx.request.body.stuId
    const classTime = ctx.request.body.classTime
    const classStyle = ctx.request.body.classStyle
    const overDue = 0
    const startTime = ctx.request.body.startTime
    const date = ctx.request.body.date
    console.log(date)
    var maxNum = ctx.request.body.maxNum
    var currentNum = await Book.count({
        where: {
            date,
            bedNum,
            classTime
        }
    })
    maxNum = parseInt(maxNum)
    currentNum = parseInt(currentNum)
    if (maxNum > currentNum) {
        if (bedNum && stuId && classTime && classStyle && startTime && date) {
            const book = {
                bedNum,
                stuId,
                classTime,
                classStyle,
                startTime,
                overDue,
                date,
            }
            // console.log(ctx.request.body)
            await Book.create(book)
            ctx.body = 'success'
        }
    } else {
        ctx.body = 0
    }


})

module.exports = router