import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	missingSuspenseWithCSRBailout: false,
	images: {
		domains: ["rickandmortyapi.com", "cdn.leonardo.ai"],
	},
};

export default nextConfig;
