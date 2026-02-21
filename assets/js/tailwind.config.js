/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.html",
        "./src/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0D3B66',
                secondary: '#FAF0CA',
                accent: '#F95738',
                text: {
                    primary: '#1B1B1B',
                    secondary: '#555555'
                }
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Inter', 'Roboto', 'sans-serif']
            }
        }
    }
}
