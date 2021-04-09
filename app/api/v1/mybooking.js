const Router = require('koa-router')
const sequelize = require('sequelize')
const router = new Router({
    prefix: '/v1/mybook'
})

const { Book } = require('../../models/book')

router.get('/show', async (ctx, next) => {
    const stuId = ctx.request.query.stuId
    const result = await Book.findAll({
        attributes: [
            'id',
            'bedNum',
            'classTime',
            'date',
            'overDue',
            [sequelize.fn('INET6_NTOA', sequelize.col('id')), 'count']
        ],
        where: {
            stuId
        }
    })
    ctx.body = result
})

module.exports = router