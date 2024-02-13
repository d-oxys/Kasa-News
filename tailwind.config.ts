import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/containers/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xl: '1440px',
      },
      colors: {
        primary: '#D61F3B',
        background: '#FAFAFA',
        primaryColor: '#518581',
        secondaryColor: '#FFB23F',
        black: '#151411',
        textColor: '#AFADB5',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

export default config;
