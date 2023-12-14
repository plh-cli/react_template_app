import Home from '../views/home';
import Login from '../views/login';
import PageIndex from '../views/index';
import PageList from '../views/list';


const routers = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'index',
        component: PageIndex,
        exact: true
      },
      {
        path: 'pageList',
        component: PageList,
        exact: true
      }
    ],
    exact: true
  },
  {
    path: '/login',
    component: Login,
    children: [],
    exact: true
  }
  // {
  //   path:'/index',
  //   component: PageIndex,
  //   exact: true
  // },
  // {
  //   path:'/pageList',
  //   component: PageList,
  //   exact: true
  // }
];

export default routers;