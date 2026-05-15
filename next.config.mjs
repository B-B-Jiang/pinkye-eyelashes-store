/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ 删掉 output: "export" 这一行！这是冲突的根源
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
};

export default nextConfig;
