import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({ 
      svgrOptions: {},
    }),
    VitePWA({  
      registerType: 'prompt',  
      manifest: {  
        name: 'Rick and Morty',  
        short_name: 'Rick and Morty', 
        background_color: '#ffffff',  
        theme_color: '#15778a',  
        start_url: '/',  
        icons: [ 
          {  
            src: 'icon-48x48.png',  
            sizes: '48x48',  
            type: 'image/png',  
          },
          {  
            src: 'icon-72x72.png',  
            sizes: '72x72',  
            type: 'image/png',  
          },
          {  
            src: 'icon-96x96.png',  
            sizes: '96x96',  
            type: 'image/png',  
          },
          {  
            src: 'icon-128x128.png',  
            sizes: '128x128',  
            type: 'image/png',  
          },
          {  
            src: 'icon-144x144.png',  
            sizes: '144x144',  
            type: 'image/png',  
          },
          {  
            src: 'icon-152x152.png',  
            sizes: '152x152',  
            type: 'image/png',  
          },
          {  
            src: 'icon-192x192.png',  
            sizes: '192x192',  
            type: 'image/png',  
          },  
          {  
            src: 'icon-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
          },  
          {  
            src: 'icon-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
            purpose: 'any maskable',  
          },  
        ],  
      },
    }),
  ],
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      shared: "/src/shared",
    },
  },
})
