module.exports = {
  reactStrictMode: true,
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  async redirects() {
    return [
      {
        source: "/bitnbuild/brochure",
        destination: "https://online.flippingbook.com/view/981439766/",
        permanent: false,
      },
      /* TODO */
      // {
      //   source: "/bitnbuild/registration",
      //   destination: "",
      //   permanent: false,
      // },
      {
        source: "/bitnbuild/problem-statements",
        destination:
          "https://potent-hyssop-b42.notion.site/Internal-Problem-Statements-801ed1518faf4122bb8beec2a390cc46",
        permanent: false,
      },
    ];
  },
};
