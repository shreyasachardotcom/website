module.exports = {
  siteMetadata: {
    title: 'Shreyas Achar',
    author: 'Shreyas Achar',
    description: 'Product Design & Strategy Consultant',
    siteUrl: 'https://shreyasachar.com',
  },
  pathPrefix: '/',
  plugins: [
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
      name: "Shreyas Achar",
      short_name: "shreyasachar",
      start_url: "/",
      background_color: "#f1f3f5",
      theme_color: "#9aa2aa",
      display: "minimal-ui",
      icons: [
        {
          // Everything in /static will be copied to an equivalent
          // directory in /public during development and build, so
          // assuming your favicons are in /static/favicons,
          // you can reference them here
          src: `/favicons/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: `/favicons/android-chrome-512x512.png`,
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    }
  },
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",
      injectHTML: true,
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        twitter: false,
        yandex: false,
        windows: false
      }
    }
  },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 1600,
              quality:50,
              sizeByPixelDensity: false,
              backgroundColor: 'transparent'
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-113409084-1`,
        anonymize: true,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    

    `gatsby-plugin-netlify`,
    {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {
        "/p2p-lending-app": [
        // matching headers (by type) are replaced by netlify with more specific routes
        "Basic-Auth: differentuser:differentpassword",
        ],
      }, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      },
    },
  ],
}
