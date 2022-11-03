/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            padding: '2rem',
        },
        colors: {
            prim: '#FFE071',
            gray: '#A3ABB2'
        },
        extend: {
            gridTemplateColumns: {
                '1k2' : '1fr 2fr'
            },
        },
    },
    plugins: [],
}