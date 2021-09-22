/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: 'serverless',
  generateBuildId: () => 'build',
}
