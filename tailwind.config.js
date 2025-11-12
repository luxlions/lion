const { join } = require('path');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/*.{js,ts,jsx,tsx,mdx,qwik,qwik.tsx}'),
    join(__dirname, 'src/global.css'),
    join(__dirname, '../website/src/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, '../../packages/kit-styled/src/**/*.{js,ts,jsx,tsx,mdx}'),
    join(__dirname, '../../packages/kit-headless/src/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.press': {
          transform: 'var(--transform-press)',
        },
      });
    }),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        alert: {
          DEFAULT: 'hsl(var(--alert))',
          foreground: 'hsl(var(--alert-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'lux-green': '#70C7BA', // Added your custom green color
      },
      borderRadius: {
        base: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        none: '0',
      },
      borderWidth: {
        base: 'var(--border-width)',
        DEFAULT: 'calc(var(--border-width) + 1px)',
        2: 'calc(var(--border-width) + 2px)',
        3: 'calc(var(--border-width) + 3px)',
        4: 'calc(var(--border-width) + 4px)',
        8: 'calc(var(--border-width) + 8px)',
      },
      boxShadow: {
        base: 'var(--shadow-base)',
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
      },
      strokeWidth: {
        0: '0',
        base: 'var(--stroke-width)',
        1: 'calc(var(--stroke-width) + 1px)',
        2: 'calc(var(--stroke-width) + 2px)',
      },
      animation: {
        'accordion-up': 'collapsible-up 0.2s ease-out 0s 1 normal forwards',
        'accordion-down': 'collapsible-down 0.2s ease-out 0s 1 normal forwards',
      },
      keyframes: {
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--qwikui-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--qwikui-collapsible-content-height)' },
          to: { height: '0' },
        },
      },
      transitionTimingFunction: {
        step: 'cubic-bezier(0.6, 0.6, 0, 1)',
        jumpy: 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
};