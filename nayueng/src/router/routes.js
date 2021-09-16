
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Index', component: () => import('src/pages/Todo.vue') },
      { path: '/Star', component: () => import('pages/Star.vue') },
      { path: '/send', component: () => import('pages/send.vue') },
      { path: '/drafts', component: () => import('pages/drafts.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
