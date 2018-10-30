import * as pages from './pages';

const routes = [
	{
		path: '/',
		name: 'login',
		component: pages.login
	},
	{
		path: '/login',
		component: pages.login
	},
	{
		path: '/home',
		component: pages.index,
		children: [
			{
				path: '/',
				component: pages.message
			},
			{
				path: '/message',
				name:'message',
				component: pages.message
			},
			{
				path: '/friend',
				name:'friend',
				component: pages.friend
			},
			{
				path: '/conference',
				name:'conference',
				component: pages.conference
			},
			{
				path: '/audioCall',
				name:'audioCall',
				component: pages.audioCall
			},
			{
				path: '/whiteboard',
				name:'whiteboard',
				component: pages.whiteboard
			},
			{
				path: '/shareScreen',
				name:'shareScreen',
				component: pages.shareScreen
			}
		]
	}
]

export default routes;
