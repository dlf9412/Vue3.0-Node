const {RequestMapping,Controller,requestMethod}=require('../utils/decorator')

@Controller('/user')
class userController{
    @RequestMapping(requestMethod.GET,'/all')
    async getAllUsers(ctx){
        ctx.body='user'
    }
}
module.exports=userController