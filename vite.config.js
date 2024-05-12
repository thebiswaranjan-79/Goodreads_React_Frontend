import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve :  {
    alias : {
     
      Components : "/src/Components",
      Pages : "/src/Pages",
      assets:"/src/assets",
      Layouts :"/src/Layouts",
      Redux:"/src/Redux",
      Config:"/src/Config",
      Helpers:"/src/Helpers",
      Routes :"/src/Routes",
    }
  },
});
