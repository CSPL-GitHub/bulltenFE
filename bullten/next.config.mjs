/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_BACKEND_HOSTNAME,
        port: "",
        pathname: "/web/**",
      },
    ],
  },
};

export default nextConfig;
