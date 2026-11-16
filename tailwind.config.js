/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Wine & Sandal Editorial Palette (colours for websites skill)
        wine: {
          950: '#321922', // Deep Ink
          900: '#5B1D2D', // Primary Hover
          800: '#76283B', // Primary Accent - rich wine
          700: '#8E2F46',
          600: '#A73C56',
          400: '#C85B75',
          300: '#B78A63', // Sandal Brass Accent
          200: '#E49FA0',
          100: '#F2D2D7',
          50: '#FAF0F2',
        },
        sandal: {
          50: '#FFFFFF',
          100: '#FFF9F2', // Crisp Surface
          200: '#F4E7D7', // Warm Sandal Background
          300: '#EBD8C6',
          400: '#E1CDBB', // Sandal Border
          500: '#C2AE9A',
          600: '#968370',
          700: '#665751', // Muted Text
          800: '#4A3E39',
          900: '#321922', // Deep Ink
        },
        // Component-compatible aliases mapped to Wine & Sandal
        indigo: {
          950: '#321922', // Deep Ink
          900: '#5B1D2D', // Primary Hover
          800: '#76283B', // Primary Accent
          700: '#8E2F46',
          600: '#A73C56',
          400: '#C85B75',
          300: '#B78A63', // Warm Brass Accent
          200: '#E49FA0',
          100: '#F2D2D7',
          50: '#FAF0F2',
        },
        vanilla: {
          50: '#FFFFFF',
          100: '#FFF9F2', // Crisp Surface
          200: '#F4E7D7', // Warm Sandal Background
          300: '#EBD8C6',
          400: '#E1CDBB', // Sandal Border
          500: '#C2AE9A',
          600: '#968370',
          700: '#665751', // Muted Text
          800: '#4A3E39',
          900: '#321922',
        },
        slate: {
          750: '#352129',
          850: '#231219',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'tactile': '0 4px 20px -2px rgba(50, 25, 34, 0.08), 0 2px 6px -1px rgba(50, 25, 34, 0.04)',
        'tactile-lg': '0 12px 32px -4px rgba(50, 25, 34, 0.12), 0 4px 12px -2px rgba(50, 25, 34, 0.06)',
        'tactile-inset': 'inset 0 2px 4px 0 rgba(50, 25, 34, 0.06)',
      }
    },
  },
  plugins: [],
};
