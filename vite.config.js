import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Si el repositorio se llama "tu-usuario.github.io", la base es "/".
// Si tiene otro nombre (por ejemplo "portfolio"), cambia base a "/portfolio/".
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
