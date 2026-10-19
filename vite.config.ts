import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'vendor-three'
            if (id.includes('framer-motion')) return 'vendor-framer'
            if (id.includes('react') || id.includes('react-dom')) return 'vendor-react'
            if (id.includes('react-parallax-tilt') || id.includes('react-vertical-timeline-component')) return 'vendor-ui'
            return 'vendor'
          }
        }
      }
    },
    cssCodeSplit: true,
    target: 'es2020',
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei', 'framer-motion']
  }
})