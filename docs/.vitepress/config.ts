export default {
  title: 'webdoc',
  description: 'Just playing around.',
  base: '/myBlog/',
  themeConfig: {
    siteTitle: 'myBlog',
    sidebar: [
      {
        text: 'JavaScript',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'basic',
            items: [
              { text: 'Object', link: '/javascript/basic/object' },
              { text: 'Arrary', link: '/javascript/basic/arrary' }
            ]
          }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/lu-jm/myBlog/tree/main/docs',
      text: 'Edit this page on GitHub'
    }
  }
}
