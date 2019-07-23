const fn_index = async (ctx,next)=>{
    ctx.response.body = `<h1>Index</h1>
     <form id='form' action='/login' method='post'>
      <p>Name:<input name='name' value='logmei'/></p>
      <p>Password:<input name='password' type='password'/></p>
      <button onclick='javascript:document.getElementById('form').submit();'>登录</button>
     </form>`;
}

const fn_post = async (ctx,next) =>{
    const name = ctx.request.body.name || ''
    const password = ctx.request.body.password || ''
    if(name==='logmei'&& password === '123456'){
        ctx.response.body = `<h2>welcome! ${name}!</h2>`
    }else{
        ctx.response.body =`<h2>Login failed!</h2>
        <p><a href='/'>try again!</a></p>`
        
    }
}

module.exports = {
    'GET /':fn_index,
    'POST /signin':fn_post
}