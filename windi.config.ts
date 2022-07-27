import { defineConfig } from "windicss/helpers";
// import colors from "windicss/colors";

export default defineConfig({
  darkMode: "media",
  theme: {
    extend: {},
  },
  preflight: false,
  extract: {
    // accepts globs and file paths relative to project root
    include: ["index.html", "src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules/**/*", ".git/**/*"],
  },
});
