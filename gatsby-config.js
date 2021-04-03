module.exports = {
  plugins: [
    {
        resolve: `gatsby-plugin-s3`,
        options: {
            bucketName: 'cryptogogos-wiki',
        },
    },
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: '',
        githubRepo: "cryptogogos/cryptogogos-wiki",
        githubHost: "https://github.com/",
        twitterHandle: "https://twitter.com/cryptogogos",
        description: "CryptoGOGOs Wiki & Knowledge Base",
        sidebarCategories: {
          null: ['index', 'about', 'universe', 'trading-cards', 'dist-and-economics', 'faq', 'glossary', 'memes']
        }
      }
    }
  ]
};
