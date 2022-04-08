export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '625099a90e435b00b219a7f9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jr7wjrwt',
                  apiId: '7b4f20a5-b17b-4d16-9815-c150dd274971'
                },
                {
                  buildHookId: '625099a91afce207da87c554',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xfe2q7pa',
                  apiId: 'a07378c7-54f6-4900-b476-f8f9053a4fba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/0xPJOS/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xfe2q7pa.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
