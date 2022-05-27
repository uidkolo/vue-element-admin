/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
        title: '组件',
        icon: 'component'
    },
    children: [{
            path: 'tinymce',
            component: () =>
                import ('@/views/components-demo/tinymce'),
            name: 'TinymceDemo',
            meta: { title: '富文本' }
        },
        {
            path: 'sticky',
            component: () =>
                import ('@/views/components-demo/sticky'),
            name: 'StickyDemo',
            meta: { title: '吸顶效果' }
        },
        {
            path: 'count-to',
            component: () =>
                import ('@/views/components-demo/count-to'),
            name: 'CountToDemo',
            meta: { title: '动态计数器' }
        },
        {
            path: 'mixin',
            component: () =>
                import ('@/views/components-demo/mixin'),
            name: 'ComponentMixinDemo',
            meta: { title: '局部特效' }
        },
        {
            path: 'back-to-top',
            component: () =>
                import ('@/views/components-demo/back-to-top'),
            name: 'BackToTopDemo',
            meta: { title: '货到顶部' }
        },
        {
            path: 'drag-dialog',
            component: () =>
                import ('@/views/components-demo/drag-dialog'),
            name: 'DragDialogDemo',
            meta: { title: '拖拽Dialog' }
        },
        {
            path: 'drag-select',
            component: () =>
                import ('@/views/components-demo/drag-select'),
            name: 'DragSelectDemo',
            meta: { title: '拖拽Select' }
        },
        {
            path: 'dnd-list',
            component: () =>
                import ('@/views/components-demo/dnd-list'),
            name: 'DndListDemo',
            meta: { title: '拖拽List' }
        },
        {
            path: 'drag-kanban',
            component: () =>
                import ('@/views/components-demo/drag-kanban'),
            name: 'DragKanbanDemo',
            meta: { title: '拖拽看板' }
        }
    ]
}

export default componentsRouter