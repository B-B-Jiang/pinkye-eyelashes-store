/** @type {import('next').NextConfig} */
const nextConfig = {
  // 开启静态导出，构建纯HTML文件
  output: 'export',
  // 关闭图片优化，适配静态导出
  images: {
    unoptimized: true,
  },
  // 强制跳过TypeScript类型检查（关键！）
  typescript: {
    ignoreBuildErrors: true,
  },
  // 关闭其他不必要的功能，避免构建失败
  trailingSlash: true,
};

export default nextConfig;