module.exports = {
    base: '/vn-mobile/',
    title: 'vn-Mobile',
    description: '一个好用的 UI 组件库',
    plugins: [
        ['demo-code', {
            jsLibs: [
                // umd
                'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
            ],
            cssLibs: [
                'https://unpkg.com/animate.css@3.7.0/animate.min.css',
            ],
            showText: 'show code',
            hideText: 'hide',
            styleStr: 'text-decoration: underline;',
            minHeight: 200,
            onlineBtns: {
                codepen: true,
                jsfiddle: true,
                codesandbox: true,
            },
            codesandbox: {
                deps: { 'lodash': 'latest' },
                json: '',
                query: '',
                embed: '',
            },
            demoCodeMark: 'demo-code',
        }]
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '快速上手', link: '/get-started/' },
            { text: '安装', link: '/install/' },
            { text: '所有组件', link: '/components/' },
        ],
        sidebar: [
            '/',
            {
                title: '入门',
                children: [
                    '/get-started/',
                    '/install/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button.md',
                    '/components/input.md'
                ]
            }
        ]
    }
}
