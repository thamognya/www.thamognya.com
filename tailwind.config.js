/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            fira: ['Fira Code'],
            scientifica: ['scientifica'],
            edu_vic_wa_nt_beginner: ['Edu VIC WA NT Beginner']
        },
        letterSpacing: {
            tight: '-0.15em'
        },
        extend: {
            height: {
                'half-screen': '50vh'
            },
            colors: {
                'bg-bg': '#f4f5f6',
                'bg-fg': '#3e495c',
                'bg-red': '#f9ac9f',
                'bg-gray': '#cad3df',
                'bg-purple': '#5c6085',
                'bg-light-gray': '#a6bac7',
                'bg-pink': '#f5bece'
            }
        }
    },
    plugins: []
}
