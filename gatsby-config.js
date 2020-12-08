module.exports = {
  siteMetadata: {
    title: "Marc Mogdanz",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        tsLoader: {
          logLevel: `warn`,
        },
        forkTsCheckerPlugin: {
          eslint: true,
        },
        codegen: false,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Marc Mogdanz",
        short_name: "Marc",
        lang: "en",
        start_url: "/",
        background_color: "#f5f5f5",
        theme_color: "#00d1b2",
        icon: "src/images/icon.png", // pre-build, so start at src/
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["JetBrainsMono"], // must be loaded via .css
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-offline", // must be below "gatsby-plugin-manifest"
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-145435399-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
      },
    },
    // must be below "gatsby-plugin-postcss"
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
      },
    },
  ],
};
