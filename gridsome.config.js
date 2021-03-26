// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '＠saqtakaのブログ',
  siteDescription: '＠saqtakaのブログ',
  siteUrl: 'https://saqtaka.com',

  templates: {
    Post: '/post/:category/:slag',
    Tag: '/tag/:id',
    // WordPress
    WordPressCategory: '/wp/category/:slug', // adds a route for the "category" post type (Optional)
    WordPressPost: '/wp/:slug', // adds a route for the "post" post type (Optional)
    WordPressPostTag: '/wp/tag/:slug' // adds a route for the "post_tag" post type (Optional)
  },

  metadata: {
    twitterName: '@saqtaka'
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://server.portability.info/', // required
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
