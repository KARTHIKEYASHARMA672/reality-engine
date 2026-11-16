/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: '#171A35', // Deep Ink
          900: '#222650', // Primary Hover
          800: '#30356F', // Primary Accent
          700: '#3D448B',
          600: '#525BB0',
          400: '#7F87D3',
          300: '#9B9FE3', // Soft Iris Accent
          200: '#C2C5F0',
          100: '#E4E6F9',
          50: '#F3F4FD',
        },
        vanilla: {
          50: '#FFFFFF',
          100: '#FFFCF4', // Crisp Surface
          200: '#FBF5E6', // Warm Vanilla Background
          300: '#F3E8CE',
          400: '#E4DDC9', // Sand Beige Border
          500: '#C8BEA3',
          600: '#9D937B',
          700: '#716954',
          800: '#4D4738',
          900: '#2C281F',
        },
        slate: {
          750: '#202638',
          850: '#121624',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'tactile': '0 4px 20px -2px rgba(23, 26, 53, 0.08), 0 2px 6px -1px rgba(23, 26, 53, 0.04)',
        'tactile-lg': '0 12px 32px -4px rgba(23, 26, 53, 0.12), 0 4px 12px -2px rgba(23, 26, 53, 0.06)',
        'tactile-inset': 'inset 0 2px 4px 0 rgba(23, 26, 53, 0.06)',
      }
    },
  },
  plugins: [],
};
