/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff00ff',
          blue: '#00ffff',
          purple: '#b026ff',
          green: '#39ff14',
          yellow: '#ccff00',
        },
        synth: {
          dark: '#0a0a1a',
          card: 'rgba(20, 20, 40, 0.7)',
          border: 'rgba(255, 0, 255, 0.3)',
        }
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
        cyber: ['"Orbitron"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'synthwave-grid': 'linear-gradient(to bottom, transparent 49%, rgba(0, 255, 255, 0.2) 50%, transparent 51%), linear-gradient(to right, transparent 49%, rgba(0, 255, 255, 0.2) 50%, transparent 51%)',
      },
      boxShadow: {
        'neon-pink': '0 0 10px #ff00ff, 0 0 20px #ff00ff',
        'neon-blue': '0 0 10px #00ffff, 0 0 20px #00ffff',
        'neon-purple': '0 0 10px #b026ff, 0 0 20px #b026ff',
      },
      animation: {
        'flicker': 'flicker 0.15s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: 0.9 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
