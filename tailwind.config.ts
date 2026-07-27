import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#f0fbfa',
          100: '#d7f4f6',
          200: '#b3e8ec',
          300: '#7ed4dd',
          400: '#38b6c8', // Primary Turquoise
          500: '#2399ac',
          600: '#1b7b8d',
          700: '#196372',
          800: '#1a525f',
          900: '#194551',
          DEFAULT: '#38B6C8',
        },
        sage: {
          50: '#f4f8f5',
          100: '#e5efe7',
          200: '#cdddcf',
          300: '#a7c4ac',
          400: '#7fae8c', // Sage Green
          500: '#5f916d',
          600: '#487455',
          700: '#3c5d46',
          800: '#334b3a',
          900: '#2b3f31',
          DEFAULT: '#7FAE8C',
        },
        ivory: {
          50: '#ffffff',
          100: '#fafaf7', // Ivory White Base
          200: '#f4f4ee',
          300: '#e9e9dd',
          400: '#d7d7c3',
          DEFAULT: '#FAFAF7',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f5edd3',
          200: '#ebd9a5',
          300: '#dfbe71',
          400: '#d3a343',
          500: '#c7a34b', // Gold Accent
          600: '#aa823a',
          700: '#876231',
          800: '#704f2d',
          900: '#5e4229',
          DEFAULT: '#C7A34B',
        },
        dark: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#2e2e2e', // Dark Gray
          DEFAULT: '#2E2E2E',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-hover': '0 12px 40px 0 rgba(56, 182, 200, 0.15)',
        'gold-glow': '0 0 25px rgba(199, 163, 75, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'water-flow': 'waterFlow 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        waterFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
