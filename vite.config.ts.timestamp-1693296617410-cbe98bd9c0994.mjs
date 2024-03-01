// vite.config.ts
import { defineConfig } from "file:///D:/ITSOLUTIONS/FNPOS/FNPOS-InscrptionEnLigneADM-FrontEnd/node_modules/vite/dist/node/index.js";
import react from "file:///D:/ITSOLUTIONS/FNPOS/FNPOS-InscrptionEnLigneADM-FrontEnd/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/ITSOLUTIONS/FNPOS/FNPOS-InscrptionEnLigneADM-FrontEnd/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"]
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: ["**/*"],
      manifest: {
        name: "fnpos_Administration",
        short_name: "fnpos",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            "type": "image/png"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            "type": "image/png"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone"
      }
      // VitePWA({
      //   // add this to cache all the imports
      //   workbox: {
      //     globPatterns: ["**/*"],
      //   },
      //   // add this to cache all the
      //   // static assets in the public folder
      //   includeAssets: ["**/*"],
      //   manifest: {
      //     theme_color: "#f69435",
      //     background_color: "#f69435",
      //     display: "standalone",
      //     scope: "/",
      //     start_url: "/",
      //     short_name: "Vite PWA",
      //     description: "Vite PWA Demo",
      //     name: "Vite PWA",
      //     icons: [
      //       {
      //         src: "/favicon.ico",
      //         sizes: "25x38",
      //         type: "image/png",
      //       },
      //       // {
      //       //   src: "/favicon.ico",
      //       //   sizes: "192x192",
      //       //   type: "image/png",
      //       // },
      //       // {
      //       //   src: "/favicon.ico",
      //       //   sizes: "256x256",
      //       //   type: "image/png",
      //       // },
      //       // {
      //       //   src: "/favicon.ico",
      //       //   sizes: "384x384",
      //       //   type: "image/png",
      //       // },
      //       // {
      //       //   src: "/favicon.ico",
      //       //   sizes: "512x512",
      //       //   type: "image/png",
      //       // },
      //     ],
      //   },
      // }),
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxJVFNPTFVUSU9OU1xcXFxGTlBPU1xcXFxGTlBPUy1JbnNjcnB0aW9uRW5MaWduZUFETS1Gcm9udEVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcSVRTT0xVVElPTlNcXFxcRk5QT1NcXFxcRk5QT1MtSW5zY3JwdGlvbkVuTGlnbmVBRE0tRnJvbnRFbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0lUU09MVVRJT05TL0ZOUE9TL0ZOUE9TLUluc2NycHRpb25FbkxpZ25lQURNLUZyb250RW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5jb25zdCBtYW5pZmVzdCA9IFwiL21hbmlmZXN0XCJcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgVml0ZVBXQSh7XHJcbiAgICAgICAgLy8gYWRkIHRoaXMgdG8gY2FjaGUgYWxsIHRoZSBpbXBvcnRzXHJcbiAgICAgIHdvcmtib3g6IHtcclxuICAgICAgICBnbG9iUGF0dGVybnM6IFtcIioqLypcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGFkZCB0aGlzIHRvIGNhY2hlIGFsbCB0aGVcclxuICAgICAgLy8gc3RhdGljIGFzc2V0cyBpbiB0aGUgcHVibGljIGZvbGRlclxyXG4gICAgICBpbmNsdWRlQXNzZXRzOiBbXCIqKi8qXCJdLFxyXG4gICAgICBtYW5pZmVzdDoge25hbWU6XCJmbnBvc19BZG1pbmlzdHJhdGlvblwiLFxyXG4gICAgICBzaG9ydF9uYW1lOlwiZm5wb3NcIixcclxuICAgICAgaWNvbnM6XHJcbiAgICAgIFt7c3JjOlwiL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXHJcbiAgICAgIHNpemVzOlwiMTkyeDE5MlwiLFwidHlwZVwiOlwiaW1hZ2UvcG5nXCJ9LFxyXG4gICAgICB7c3JjOlwiL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXHJcbiAgICAgIHNpemVzOlwiNTEyeDUxMlwiLFwidHlwZVwiOlwiaW1hZ2UvcG5nXCJcclxuICAgIH1dLHRoZW1lX2NvbG9yOlwiI2ZmZmZmZlwiLGJhY2tncm91bmRfY29sb3I6XCIjZmZmZmZmXCIsZGlzcGxheTpcInN0YW5kYWxvbmVcIn1cclxuICAgICAgXHJcbiAgICAvLyBWaXRlUFdBKHtcclxuICAgIC8vICAgLy8gYWRkIHRoaXMgdG8gY2FjaGUgYWxsIHRoZSBpbXBvcnRzXHJcbiAgICAvLyAgIHdvcmtib3g6IHtcclxuICAgIC8vICAgICBnbG9iUGF0dGVybnM6IFtcIioqLypcIl0sXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIC8vIGFkZCB0aGlzIHRvIGNhY2hlIGFsbCB0aGVcclxuICAgIC8vICAgLy8gc3RhdGljIGFzc2V0cyBpbiB0aGUgcHVibGljIGZvbGRlclxyXG4gICAgLy8gICBpbmNsdWRlQXNzZXRzOiBbXCIqKi8qXCJdLFxyXG4gICAgLy8gICBtYW5pZmVzdDoge1xyXG4gICAgLy8gICAgIHRoZW1lX2NvbG9yOiBcIiNmNjk0MzVcIixcclxuICAgIC8vICAgICBiYWNrZ3JvdW5kX2NvbG9yOiBcIiNmNjk0MzVcIixcclxuICAgIC8vICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgIC8vICAgICBzY29wZTogXCIvXCIsXHJcbiAgICAvLyAgICAgc3RhcnRfdXJsOiBcIi9cIixcclxuICAgIC8vICAgICBzaG9ydF9uYW1lOiBcIlZpdGUgUFdBXCIsXHJcbiAgICAvLyAgICAgZGVzY3JpcHRpb246IFwiVml0ZSBQV0EgRGVtb1wiLFxyXG4gICAgLy8gICAgIG5hbWU6IFwiVml0ZSBQV0FcIixcclxuICAgIC8vICAgICBpY29uczogW1xyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjI1eDM4XCIsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAgLy8ge1xyXG4gICAgLy8gICAgICAgLy8gICBzcmM6IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICAvLyAgICAgICAvLyAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgIC8vICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgIC8vICAgICAgIC8vIH0sXHJcbiAgICAvLyAgICAgICAvLyB7XHJcbiAgICAvLyAgICAgICAvLyAgIHNyYzogXCIvZmF2aWNvbi5pY29cIixcclxuICAgIC8vICAgICAgIC8vICAgc2l6ZXM6IFwiMjU2eDI1NlwiLFxyXG4gICAgLy8gICAgICAgLy8gICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgLy8gfSxcclxuICAgIC8vICAgICAgIC8vIHtcclxuICAgIC8vICAgICAgIC8vICAgc3JjOiBcIi9mYXZpY29uLmljb1wiLFxyXG4gICAgLy8gICAgICAgLy8gICBzaXplczogXCIzODR4Mzg0XCIsXHJcbiAgICAvLyAgICAgICAvLyAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICAvLyB9LFxyXG4gICAgLy8gICAgICAgLy8ge1xyXG4gICAgLy8gICAgICAgLy8gICBzcmM6IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICAvLyAgICAgICAvLyAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgIC8vICAgICAgIC8vICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgIC8vICAgICAgIC8vIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0pLFxyXG59KV0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtXLFNBQVMsb0JBQW9CO0FBQy9YLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBO0FBQUEsTUFFTixTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsTUFBTTtBQUFBLE1BQ3ZCO0FBQUE7QUFBQTtBQUFBLE1BR0EsZUFBZSxDQUFDLE1BQU07QUFBQSxNQUN0QixVQUFVO0FBQUEsUUFBQyxNQUFLO0FBQUEsUUFDaEIsWUFBVztBQUFBLFFBQ1gsT0FDQTtBQUFBLFVBQUM7QUFBQSxZQUFDLEtBQUk7QUFBQSxZQUNOLE9BQU07QUFBQSxZQUFVLFFBQU87QUFBQSxVQUFXO0FBQUEsVUFDbEM7QUFBQSxZQUFDLEtBQUk7QUFBQSxZQUNMLE9BQU07QUFBQSxZQUFVLFFBQU87QUFBQSxVQUN6QjtBQUFBLFFBQUM7QUFBQSxRQUFFLGFBQVk7QUFBQSxRQUFVLGtCQUFpQjtBQUFBLFFBQVUsU0FBUTtBQUFBLE1BQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZ0Q1RSxDQUFDO0FBQUEsRUFBQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
