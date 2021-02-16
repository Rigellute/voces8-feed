import path from "path";
import { defineConfig } from "vite";
import preactRefresh from "@prefresh/vite";

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  plugins: [preactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "MyLib",
    },
  },
});
