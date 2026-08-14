import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages는 https://<user>.github.io/K-PETRO-PROJ/ 하위 경로에서 서빙되므로
// 프로덕션 빌드에서만 base를 저장소 이름으로 맞춰줍니다. 로컬 dev 서버는 영향 없음.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/K-PETRO-PROJ/" : "/",
  plugins: [react()],
}));
