module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        root: __dirname,
        siteName: 'CryptoGOGOs Wiki',
        githubRepo: "https://github.com/cryptogogos/cryptogogos-wiki",
        twitterHandle: "https://twitter.com/cryptogogos",
        description: "CryptoGOGOs Wiki & Knowledge Base",
        sidebarCategories: {
          null: ['index', 'about', 'universe', 'trading-cards', 'dist-and-economics', 'faq', 'glossary', 'memes']
        }
      }
    }
  ]
};
