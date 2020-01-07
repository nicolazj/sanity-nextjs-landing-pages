export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e13df1874ead8657f0ea1b2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8511sv6u',
                  apiId: 'a6573a49-1880-486c-bba8-2c6f7d2333d5'
                },
                {
                  buildHookId: '5e13df19508d523d01eeac8c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9puysjyo',
                  apiId: '1fd498eb-210a-4729-bc3e-3f61785fea76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicolazj/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9puysjyo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
