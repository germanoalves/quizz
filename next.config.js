module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
     }
  },
  images: {
    loader: "default",
    
  },

}