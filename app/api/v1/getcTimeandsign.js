const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Book } = require('../../models/book')
const { Signin } = require('../../models/signIn')
const { Signinstu } = require('../../models/signstu')
const { Student } = require('../../models/student')

router.get('/ctandsign', async (ctx, next) => {
    const date = ctx.request.query.date
    const classStyle = ctx.request.query.classStyle
    const classTime = ctx.request.query.classTime
    if (date && classStyle && classTime) {
        await Signin.findOne({
            where: {
                classStyle,
                classTime,
                date
            },
        }).then(async (res) => {
            console.log(res.dataValues.id)
            const signId = res.dataValues.id
            if (signId) {
                const signRes = await Signinstu.findAll({
                    where: {
                        signId
                    },
                    attributes: [
                        'stuId'
                    ]
                })
                Book.belongsTo(Student, {
                    foreignKey: 'stuId',
                    targetKey: 'id'
                })
                const bookRes = await Book.findAll({
                    where: {
                        classStyle,
                        classTime,
                        date
                    },
                    include: [{
                        model: Student,
                        attributes: [
                            'stuClass',
                            'stuName',
                            'stuNum'
                        ]
                    }],
                    attributes: [
                        'bedNum',
                        'stuId'
                    ]
                })
                ctx.body = {
                    signRes,
                    bookRes
                }

            }
        })
            .catch((err) => {
                ctx.body = err
            })







    }
    // ctx.body = 'ok'
})

module.exports = router