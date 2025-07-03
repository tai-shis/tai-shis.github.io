import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { execSync } from "child_process";

const commitDate = execSync("git log -1 --date=iso-strict --pretty=format:%cd")
	.toString()
	.trim();

// https://vite.dev/config/
export default defineConfig({
	base: "/",
	plugins: [react(), tailwindcss()],
	define: {
		__COMMIT_DATE__: JSON.stringify(commitDate),
	},
});
