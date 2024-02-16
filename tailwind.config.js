/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'on-primary-container': 'var(--on-primary-container)',
        'primary-container': 'var(--primary-container)',
        content: 'var(--content)',
        neutral: 'var(--neutral)',
        surface: 'var(--surface)',
        fill: 'var(--fill)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};
