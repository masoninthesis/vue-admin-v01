import lazyLoading from './lazyLoading'

export default {
  meta: {
    label: 'UI Features',
    icon: 'fa-laptop',
    expanded: false
  },

  children: [
    {
      name: 'Tasks',
      path: '/icons',
      meta: {
        link: 'ui/Icons.vue'
      },
      component: lazyLoading('ui/Icons')
    },
    {
      name: 'Buttons',
      path: '/buttons',
      meta: {
        link: 'ui/Buttons.vue'
      },
      component: lazyLoading('ui/Buttons')
    },
    {
      name: 'Form',
      path: '/form',
      meta: {
        link: 'ui/Form.vue'
      },
      component: lazyLoading('ui/Form')
    },
    {
      name: 'Typography',
      path: '/typography',
      meta: {
        link: 'ui/Typography.vue'
      },
      component: lazyLoading('ui/Typography')
    }
  ]
}
