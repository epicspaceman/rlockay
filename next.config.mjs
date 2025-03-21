/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'jg8rbntofs14m6qe.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
