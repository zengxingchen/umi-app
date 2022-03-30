export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   name: '查询表格',
  //   icon: 'smile',
  //   path: '/listtablelist',
  //   component: './ListTableList',
  // },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '道路风险管理',
    icon: 'smile',
    path: '/dashboardmonitor',
    component: './DashboardMonitor',
  },
  {
    name: '数据更新',
    icon: 'upload',
    path: '/emptypage',
    // 如果是相对路径，会从 src/pages 开始找起。
    component: './EmptyPage',
  },
  {
    component: './404',
  },
];
