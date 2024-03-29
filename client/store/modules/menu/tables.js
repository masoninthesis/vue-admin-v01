import lazyLoading from './lazyLoading'

export default {
  name: 'Tables',
  meta: {
    icon: 'mdi-vector-difference',
    expanded: false
  },

  children: [
    {
      name: 'BasicTables',
      path: '/tables/basic',
      meta: {
        label: 'Basic Tables',
        link: 'tables/Basic.vue'
      },
      component: lazyLoading('tables/Basic')
    }
  ]
}
