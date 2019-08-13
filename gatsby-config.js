module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@gatsbyjs",
  },
  plugins: [
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
        google: {
          families: ["Lacquer", "Montserrat"],
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
    "gatsby-plugin-eslint",
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
  ],
};
