export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6048fbdc81b73f00cbdc5785',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6ehdioaa',
                  apiId: 'f39eb9a3-90df-4643-b962-7c74cbf79c28'
                },
                {
                  buildHookId: '6048fbdd893ba30782dcdfb8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fn2na7f1',
                  apiId: 'b95fb32b-02d4-419d-923d-f024fb1c7191'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melanieproduct/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fn2na7f1.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
