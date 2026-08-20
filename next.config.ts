import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Hero'da quality={90} kullanılıyor; yeni Next sürümleri
       izin verilen kalite değerlerini açıkça istiyor. */
    qualities: [75, 90],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;