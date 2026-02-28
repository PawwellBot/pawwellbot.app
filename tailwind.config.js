/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pawwelium: {
          // ==========================================
          // THEME COLORS - CHANGE THESE
          // ==========================================
          
          // Primary brand color (was yellow, now white)
          primary: '#FFFFFF',        // White
          primaryHover: '#E0E0E0',   // Slightly darker white for hover
          
          // Accent color (keep yellow or change to another color)
          accent: '#FFD700',         // Yellow accent (optional)
          
          // Background colors
          dark: '#0A0A0A',
          card: '#141414',
          border: '#2A2A2A',
          text: '#F0F0F0',
          muted: '#888888',
          
          // Legacy names (for compatibility)
          yellow: '#FFFFFF',         // Now white
          gold: '#E0E0E0',           // Now light gray
          
          // ==========================================
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E0E0E0 25%, #888888 50%, #1A1A1A 75%, #0A0A0A 100%)',
        'glow-primary': 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 255, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}