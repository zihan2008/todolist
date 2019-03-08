import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const invest = r => require.ensure([], () => r(require('../pages/invest/invest')), 'invest')
const centre = r => require.ensure([], () => r(require('../pages/centre/centre')), 'centre')
const news = r => require.ensure([], () => r(require('../pages/news/newsCenter')), 'news')
const newsInfo = r => require.ensure([], () => r(require('../pages/news/children/newsInfo')), 'newsInfo')

export default[{
  path: '/',
  component: App,
  children: [
    {
      path: '',
      component: home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/invest',
      component: invest,
      meta: {
        keepAlive: true,
        title:'列表'
      }
    },
    {
      path: '/centre',
      component: centre
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/news/newsInfo',
      component: newsInfo
    }
  ]
}
]
