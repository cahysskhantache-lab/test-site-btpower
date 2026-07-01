import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "react/no-unescaped-entities": "off"
    }
  },
  {
    ignores: [".next/**", "out/**", "dist/**", "work/**", "next-env.d.ts"]
  }
];

export default eslintConfig;
