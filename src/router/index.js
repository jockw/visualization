
const reqPages = require.context('../components', true, /\.vue$/);
let  routeList = [];

reqPages.keys().forEach(key => {
  const name = key.replace('./', '');
  const component = reqPages(key);
  const com = () => import('../components/' + name);
  if (name.endsWith('view.vue')) {
	routeList.push({
		path: key.slice(1, -'view.vue'.length) + (component.route || ''),
		component: com,
	})
  }
});
console.log(routeList)
const login = () => import('../page/login');
const manage = () => import('../page/nav');
const home = () => import('../page/home');
// const addShop = r => require.ensure([], () => r(require('../components/addShop/addShop')), 'addShop');
// const user-admin = r => require.ensure([], () => r(require('../components/user-admin/user-admin')), 'user-admin');
// const userList = r => require.ensure([], () => r(require('../components/userList/userList')), 'userList');
// const shopList = r => require.ensure([], () => r(require('../components/shopList/shopList')), 'shopList');
// const foodList = r => require.ensure([], () => r(require('../components/foodList/foodList')), 'foodList');
// const orderList = r => require.ensure([], () => r(require('../components/orderList/orderList')), 'orderList');
// const adminList = r => require.ensure([], () => r(require('../components/adminList/adminList')), 'adminList');
// const visitor = r => require.ensure([], () => r(require('../components/visitor/visitor')), 'visitor');
// const newMember = r => require.ensure([], () => r(require('../components/newMember/newMember')), 'newMember');
// const uploadImg = r => require.ensure([], () => r(require('../page/uploadImg')), 'uploadImg');
const uploadImg = ()  => import(/* webpackChunkName: "uploadImg" */'../page/uploadImg');
// const admdinSet = r => require.ensure([], () => r(require('../page/adminSet')), 'adminSet');
// const sendMessage = r => require.ensure([], () => r(require('../page/sendMessage')), 'sendMessage');
// const explain = r => require.ensure([], () => r(require('../page/explain')), 'explain');

const routes = [
	{
		path: '/login',
		component: login
	},
	{
		path: '/',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
			}, {
			path: 'uploadImg',
			component: uploadImg,
			meta: [],
			}, 
			...routeList,
		]
	}
]
		// children: [{
		// 	path: '',
		// 	component: home,
		// 	meta: [],
		// },{
		// 	path: '/addShop',
		// 	component: addShop,
		// 	meta: ['添加数据', '添加商铺'],
		// },{
		// 	path: '/user-admin',
		// 	component: user-admin,
		// 	meta: ['添加数据', '添加商品'],
		// },{
		// 	path: '/userList',
		// 	component: userList,
		// 	meta: ['数据管理', '用户列表'],
		// },{
		// 	path: '/shopList',
		// 	component: shopList,
		// 	meta: ['数据管理', '商家列表'],
		// },{
		// 	path: '/foodList',
		// 	component: foodList,
		// 	meta: ['数据管理', '食品列表'],
		// },{
		// 	path: '/orderList',
		// 	component: orderList,
		// 	meta: ['数据管理', '订单列表'],
		// },{
		// 	path: '/adminList',
		// 	component: adminList,
		// 	meta: ['数据管理', '管理员列表'],
		// },{
		// 	path: '/visitor',
		// 	component: visitor,
		// 	meta: ['图表', '用户分布'],
		// },{
		// 	path: '/newMember',
		// 	component: newMember,
		// 	meta: ['图表', '用户数据'],
		// },{
		// 	path: '/uploadImg',
		// 	component: uploadImg,
		// 	meta: ['文本编辑', 'MarkDown'],
		// },{
		// 	path: '/adminSet',
		// 	component: adminSet,
		// 	meta: ['设置', '管理员设置'],
		// },{
		// 	path: '/sendMessage',
		// 	component: sendMessage,
		// 	meta: ['设置', '发送通知'],
		// },{
		// 	path: '/explain',
		// 	component: explain,
		// 	meta: ['说明', '说明'],
		// }]

export default routes;
