
const fs = require('fs')
const router = require('koa-router')()

const HTTP_TYPE_INDEX={
    GET:{index:4,func:(path,fun)=>router.get(path,fun)},
    POST:{index:5,func:(path,fun)=>router.post(path,fun)},
    PUT:{index:4,func:(path,fun)=>router.put(path,fun)},
    DELETE:{index:7,func:(path,fun)=>router.delete(path,fun)},
}

function addControllers(controllers_dir){
    const files = fs.readdirSync(__dirname+'/'+controllers_dir);//使用sync是因为启动时只允许执行一次，不存在性能的问题
    const js_files = files.filter(v=>v.endsWith('.js'));//过滤js文件
    js_files.forEach(file=>{
        const mapping = require(__dirname+'/'+controllers_dir+'/'+file)
        addMapping(mapping);
    })

}

function addMapping(mapping){
    console.log('mapping',mapping)
    Object.keys(mapping).forEach(key=>{
        Object.keys(HTTP_TYPE_INDEX).forEach(v=>{
            if(key.indexOf(v)===-1) return;
            const path = key.substring(HTTP_TYPE_INDEX[v].index);
            const fun = HTTP_TYPE_INDEX[v].func;
            console.log(`register URL mapping :${v} ${path} `)
            fun(path,mapping[key])
        })
       
    })
    
}

module.exports = function(){
    const controllers_dir = 'controllers';//如果不传参数，扫描目录为'controllers'
    addControllers(controllers_dir)
    return router.routes();
}

