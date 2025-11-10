import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ o base deve ser o nome do seu repositório no GitHub
export default defineConfig({
  plugins: [react()],
  base: "/ric_retrogaming_list/",
});
