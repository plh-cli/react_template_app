import PageIndex from '../views/index'
import PageList from '../views/list'

const routers = [
  {
    path:'/',
    component: PageIndex,
    exact: true
  },
  {
    path:'/pageList',
    component: PageList,
    exact: true
  }
]

export default routers