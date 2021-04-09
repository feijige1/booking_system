const Router = require('koa-router')
// const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/setting'
})


const { Student } = require('../../models/student')

router.post('/forbidden', async (ctx, next) => {
    const deleteData = ctx.request.body.deleteData
    console.log(deleteData, '--------------')
    const ifopen = ctx.request.body.ifopen
    var obj = []
    for (var i in deleteData) {
        var obj1 = {
            id: deleteData[i],
            state: ifopen
        }
        obj[i] = obj1
    }

    const result = await Student.bulkCreate(obj, { updateOnDuplicate: ["state"] })
    if (result) {
        ctx.body = 'success'
    }

})

module.exports = router