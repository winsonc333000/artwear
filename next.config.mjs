import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
// REVIEW_EXPORT=1 writes a static copy to out/ for the impeccable first-viewport review.
const reviewExport = process.env.REVIEW_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: root,
  ...(reviewExport ? { output: "export", assetPrefix: "/out", distDir: "out" } : {}),
};
export default nextConfig;
