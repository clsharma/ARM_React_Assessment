export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A3D3D',
          DEFAULT: '#174545',
        },
        accent: {
          blue: '#00B4D8',
        },
        text: {
          dark: '#1A1A1A',
          light: '#FFFFFF',
        },
        border: '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
