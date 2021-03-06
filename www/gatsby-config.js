module.exports = {
  siteMetadata: {
    title: `Luke 10X`,
    description: `Full Stack Developer and Code Instructor`,
    author: `@realLuke10X`,
    siteUrl: `https://www.luke10x.dev`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-projects`,
        name: `markdown-projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-cname`,
  ]
}
