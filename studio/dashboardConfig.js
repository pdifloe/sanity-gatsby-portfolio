export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '635bce8cbc7fe40ca24b46c4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fpszoaxk',
                  apiId: '388ebb38-b227-4cea-954a-8f96c6c6191d'
                },
                {
                  buildHookId: '635bce8c33a41311689afe7c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qudej2io',
                  apiId: '119e970f-de66-4a27-ac08-580c76fa4d6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pdifloe/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qudej2io.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
