module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        'custom-black': '#000000',
        'custom-gray': '#222222',
        'custom-light-green': '#1dcd9f',
        'custom-dark-green': '#169976',
        'custom-red': '#e52020',
        'custom-orange': '#FBA518',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
