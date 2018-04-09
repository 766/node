  // 引入模块
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from '../route/router'

const app = new Koa()
const port = 8088;



app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});
// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// 使用 bodyParser 和 KoaStatic 中间件
app.use(bodyParser());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port);
console.log('server listen on port:' + port)