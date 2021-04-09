const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/get'
})

const { Student } = require('../../models/student')

router.get('/stuInfo', async (ctx, next) => {

    const result = await Student.findAll({

        // attributes: [
        //     'bedNum',
        //     'numLimit',
        //     'classTime'
        // ],
    })
    // console.log(66)
    // console.log(result)
    ctx.body = result

})

module.exports = router