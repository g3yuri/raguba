// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
  },
  
  // Compression and optimization
  compressHTML: true,
  
  // Security headers
  security: {
    checkOrigin: true,
  },
  
  // Image optimization
  image: {
    domains: ['raguba.com.pe'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raguba.com.pe',
      }
    ]
  },
  
  // Vite optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'lucide': ['lucide']
          }
        }
      }
    }
  }
});
