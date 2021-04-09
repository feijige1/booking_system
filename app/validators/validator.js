// 接口参数校验层
const { LinValidator, Rule } = require('../../core/lin-validator')
const { Book } = require('../models/book')


class PositiveIntegerValidator extends LinValidator { //校验正整数
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '需要是正整数', { min: 1 }),
        ]
    }
}

class bookValidator {
    static async InitbookValidator(ctx) {
        // console.log(ctx.request.body.stuID)
        // const user = await Book.findOne({
        //     where: {
        //         stuNum: ctx.request.body.stuID
        //     }
        // })
        // if (user) {
        //     throw new global.errs.ParameterException('已存在')
        //     console.log('已存在')
        //     return 1
        // } else {
        // throw new global.errs.ParameterException('已存在')
        // return 0
        // }
    }
    // async validatestuNum(vals) {
    //     const stuNum = vals.body.stuNum
    //     const user = await Book.findOne({
    //         where: {
    //             stuNum: stuNum
    //         }
    //     })
    //     if (user) {
    //         throw new Error('学号已经存在')

    //     }
    // }
}

// class registerValidator extends LinValidator {    //校验注册参数
//     constructor() {
//         super()
//         this.email = [
//             new Rule('isEmail', '不符合规范')
//         ]
//         this.password1 = [
//             new Rule('isLength', '密码至少6个字符,最多32个字符', {
//                 min: 6,
//                 max: 32
//             }),
//             new Rule('matches', '密码不符合规范', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
//         ]
//     }

// }
class NotEmptyValidator extends LinValidator {
    constructor() {
        super()
        this.stuName = [
            new Rule('isLength', '不允许为空', { min: 1 })
        ]
    }
}

class StudentloginValidator extends LinValidator {
    static NotEmpty(body) {
        console.log(body)
        let stuName = body.stuName
        let stuNum = body.stuNum
        if (!stuName || !stuNum) {
            return 0
        }
        return 1
    }
}

module.exports = {
    PositiveIntegerValidator,
    bookValidator,
    NotEmptyValidator,
    StudentloginValidator
}