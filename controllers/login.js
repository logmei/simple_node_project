
const fn_login = async (ctx,next)=>{
    const name = ctx.request.body.name || '';
    const pwd = ctx.request.body.password || '';
    const data = {code:0,msg:'',result:`hello!${name},登录成功`}
    if(name!=='logmei'&&pwd!=='123456'){
        data.code=1
        data.msg='登录失败'
    }
    ctx.response.body = JSON.stringify(data)
}
module.exports = {
    'POST /login':fn_login
}

