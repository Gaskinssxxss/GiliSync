/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      borderRadius: {
        '4xl': '2rem', // Atur sesuai kebutuhan
        '5xl': '3rem', // Atur sesuai kebutuhan
        '6xl': '4rem', // Atur sesuai kebutuhan
        '7xl': '5rem', // Atur sesuai kebutuhan
      },
      margin: {
        '85': '21.25rem', // Sesuaikan dengan nilai yang diinginkan
        '86': '21.5rem', // Sesuaikan dengan nilai yang diinginkan
        '87': '21.75rem', // Sesuaikan dengan nilai yang diinginkan
        '88': '22rem', // Sesuaikan dengan nilai yang diinginkan
        '89': '22.25rem', // Sesuaikan dengan nilai yang diinginkan
        '90': '22.5rem', // Sesuaikan dengan nilai yang diinginkan
        '91': '22.75rem', // Sesuaikan dengan nilai yang diinginkan
        '92': '23rem', // Sesuaikan dengan nilai yang diinginkan
        '93': '23.25rem', // Sesuaikan dengan nilai yang diinginkan
        '94': '23.5rem', // Sesuaikan dengan nilai yang diinginkan
      },
      spacing: {
        '105': '580px',
        '100': '550px',
        '98': '480px',
        '93': '400px',
        '90': '360px'
      },
    },
    plugins: [],
  }
}

