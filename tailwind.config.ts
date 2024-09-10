import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/shared/components/**', './src/widgets/**', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      ruda: ['var(--font-ruda)'],
    },
    colors: {
      white: {
        100: 'rgba(255, 255, 255, 1)',
        200: 'rgba(247, 247, 247, 1)',
        300: 'rgba(234, 234, 234, 1)',
        400: 'rgba(194, 194, 194, 1)',
      },
      orange: 'rgba(255, 132, 84, 1)',
      black: 'rgba(0, 0, 0, 1)',
      backdrop: 'rgba(0, 0, 0, 0.4)',
    },
    extend: {
      borderRadius: {
        md: '32px',
        sm: '16px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
