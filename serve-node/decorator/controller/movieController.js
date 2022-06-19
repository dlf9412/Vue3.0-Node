const {RequestMapping,Controller}=require('../utils/decorator')

@Controller('/movie')
class MovieController{

    @RequestMapping(requestMethod.GET,'/all')
    async getAllMovies(ctx){
        ctx.body='movie'
    }
}

module.exports=MovieController