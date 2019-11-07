
const fn_login = async (ctx,next)=>{
    console.log('ctx.request.body',ctx.request.body)
    const name = ctx.request.body.username || '';
    const pwd = ctx.request.body.password || '';
    const data = 
    {
      code:0,
      massage:`hello!${name},登录成功`,
      result:{
        token:'akjldhowieurwqierwoqierjqwlekjfaslkdf',
        user:{
          name:'logmei',
          departmentName:'技术部',
          identity:'工程师'
        }
      }
    }
    
    if(name!=='logmei'&&pwd!=='123456'){
        data.code=1
        data.msg='用户名或密码错误'
        data.result = ''
    }
    ctx.response.body = JSON.stringify(data)
}
module.exports = {
    'POST /login':fn_login
}

