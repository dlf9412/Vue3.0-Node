const requireMethod={
    'GET':'get',
    'POST':'post',
    'DELETE':'delete',
    'PUT':'put',
    'OPTION':'option',
    'PATCH':'patch'
}

const controllersArray=[]


//装饰器对类的行为的改变，是代码编译时发生的，而不是运行时
//所以，在之前就干了这么一件事
//movieController-->movieController.prefix='/movie'
function Controller(prefix=''){
    return function(target){
        target.prefix=prefix
    }

}

function RequestMapping(method='',url=''){
    return function(target,name,descriptor){
        let path='';
        if(!url){
            path='/'+name;
        }else{
            path=url;
        }

        //创建router需要的数据
        const item={
            url:path,
            method:method,
            handler:target[name],
            constructor:target.constructor,
        }
        controllersArray.push(item)
    }

}
module.exports={
    Controller,
    RequestMapping,
    requireMethod,
    controllersArray
}