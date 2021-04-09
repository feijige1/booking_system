const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/book'
})
const { Book } = require('../../models/book')
const { Student } = require('../../models/student')
const { bookValidator } = require('../../validators/validator')

router.post('/bookmany', async (ctx, next) => {
    console.log(ctx.request.body.nameList)
    const nameList = ctx.request.body.nameList
    const numList = ctx.request.body.numList
    console.log(numList)
    const bedNum = ctx.request.body.bedNum
    const stuId = ctx.request.body.stuId
    const classTime = ctx.request.body.classTime
    const classStyle = ctx.request.body.classStyle
    const overDue = 0
    const startTime = ctx.request.body.startTime
    const date = ctx.request.body.date
    const num = ctx.request.body.num
    console.log(num)
    var maxNum = ctx.request.body.maxNum
    var currentNum = await Book.count({
        where: {
            date,
            bedNum,
            classTime
        }
    })
    if (num == 2) {
        const stuName2 = nameList[0]
        const stuNum2 = numList[0]
        const stu2 = await Student.findOne({
            where: {
                stuNum: stuNum2,
                stuName: stuName2
            }
        }).then(async (res) => {
            console.log(res)
            const id2 = res.dataValues.id
            if (id2) {
                if ((3 - currentNum) >= 2) {
                    var data1 = {
                        bedNum,
                        stuId,
                        classTime,
                        classStyle,
                        startTime,
                        overDue,
                        date
                    }
                    var data2 = {
                        bedNum,
                        stuId: id2,
                        classTime,
                        classStyle,
                        startTime,
                        overDue,
                        date
                    }
                    dataList = [data1, data2]
                    await Book.bulkCreate(dataList).then(() => {
                        ctx.body = 'success'
                    })
                }
            }
        }).catch(() => {
            ctx.body = '0'
        })
    } else if (num == 3) {
        const stuName2 = nameList[0]
        const stuNum2 = numList[0]
        const stuName3 = nameList[1]
        const stuNum3 = numList[1]
        var id2 = 0
        var id3 = 0
        const stu3 = await Student.findOne({
            where: {
                stuNum: stuNum3,
                stuName: stuName3
            }
        }).then(async (res) => {
            id3 = res.dataValues.id
            console.log(id3, 3)
        }).catch(() => {
            ctx.body = '0'
        })
        const stu2 = await Student.findOne({
            where: {
                stuNum: stuNum2,
                stuName: stuName2,

            }
        }).then(async (res) => {
            id2 = res.dataValues.id
            console.log(2, id2)
        }).catch(() => {
            ctx.body = '0'
        })
        if (id2 && id3) {
            if ((3 - currentNum) >= 3) {
                var data1 = {
                    bedNum,
                    stuId,
                    classTime,
                    classStyle,
                    startTime,
                    overDue,
                    date
                }
                var data2 = {
                    bedNum,
                    stuId: id2,
                    classTime,
                    classStyle,
                    startTime,
                    overDue,
                    date
                }
                var data3 = {
                    bedNum,
                    stuId: id3,
                    classTime,
                    classStyle,
                    startTime,
                    overDue,
                    date
                }
                dataList = [data1, data2, data3]
                await Book.bulkCreate(dataList).then(() => {
                    ctx.body = 'success'
                })
            }
        }
    }



})

module.exports = router