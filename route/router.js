import Router from 'koa-router'
import manager from '../app/controller/process'
const router = new Router();

router.get('/information/:mac', async (ctx,next) => {
  let mac = ctx.params.mac;
  ctx.body = await manager.information(mac)
});

router.get('/',async (ctx,next) =>{
  ctx.body = 'Hello world!'
})

router.get('/health/:mac',async(ctx,next) => {
  let mac = ctx.params.mac;
  ctx.body = await manager.health(mac)
})

router.get('/track/:mac',async (ctx , next) => {
  let mac = ctx.params.mac;
  ctx.body = await manager.track(mac);
})

router.get('/step/:day/:sortby',async (ctx , next) => {
  let day = ctx.params.day;
  let sortby = ctx.params.sortby;
  ctx.body = await manager.step(day,sortby);
})

router.get('/hotspot',async (ctx,next) => {
  ctx.body = await manager.hotspot();
})

router.get('/rank/:item/:mac/:sortby',async (ctx ,next) =>{
  let mac = ctx.params.mac,
      item = ctx.params.item,
      sortby = ctx.params.sortby;
})

export default router

