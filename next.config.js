module.exports = {
  // reactStrictMode: true ,
  swcMinify: false ,
  env : {
    BASE_URL : 'https://strapi-server-blog.herokuapp.com',
  },  
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
