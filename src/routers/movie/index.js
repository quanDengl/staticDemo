export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    children: [
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        },
        {
            path: 'city',
            component: () => import('@/components/city')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/nowPlaying')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/comingSoon')
        },
        {
            path: 'search',
            component: () => import('@/components/search')
        },
        {
            path: 'detail/:movieId',
            components: {
                detail: () => import('@/views/movie/detail')
            },
            props: {
                detail: true
            }
        }
    ]
}