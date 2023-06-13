import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        gmuTheme: {
          primary: "#006940",
          secondary: "#ffcc33",
          accent: "#27825F",
          neutral: "#001C00",
          "base-100": "#003621",
          info: "#3358FF",
          success: "#00B570",
          warning: "#E8A323",
          error: "#B51F00",
        },
      },
    ],
  },
} satisfies Config;
