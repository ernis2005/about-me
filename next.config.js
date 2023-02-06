/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 swcMinify:true,
 optimizeFonts:true,
 images:{
  remotePatterns:[
    {
      protocol:"https",
      hostname:"firebasestorage.googleapis.com"
    }
  ],
  minimumCacheTTL:1500000,
 }
}


module.exports = nextConfig

