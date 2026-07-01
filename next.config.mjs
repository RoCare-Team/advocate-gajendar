/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Pin the workspace root so a stray parent-directory lockfile isn't chosen.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
