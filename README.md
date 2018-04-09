===========================

###########环境依赖
node v0.10.28+

###########部署步骤
1. 添加系统环境变量

2. npm install  //安装node运行环境

3. node start.js   //启动服务


###########目录结构描述
├── Readme.md                   // help
├── app                         // 应用
├── route                         //路由
├── node_modules
├── package.json
├── people.json              // 数据文件
└── start.js                 // 服务启动文件

接口

人员的mac地址所对应的，平均心率，每天的步数，每天的卡路里数
{
	method:'GET',
	url:localhost:8088/health/[mac address]
}

人员的运动轨迹
{
	method:'GET',
	url:localhost:8088//track/[mac address]
}

人员步数排行榜，对人员每天的总步数进行"分别"的排名
{
	method:'GET',
	url:localhost:8088/step/[day:{0 || 1}]/[sortby:{'desc' || 'aesc'}]
}

热区（每个房间的"人流比"为多少,建议用热区图做出5个房间所占人流百分比）
{
	method:'GET',
	url:localhost:8088/hotspot
}






