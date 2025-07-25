/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                'tablet': '640px',
                // => @media (min-width: 640px) { ... }

                'laptop': '1024px',
                // => @media (min-width: 1024px) { ... }

                'desktop': '1280px',
                // => @media (min-width: 1280px) { ... }
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            },
            "animation": {
                "fade-in-up": "fade-in-up 0.9s ease-in-out"
            },
            "fade-in-up": {
                "0%": {
                    "opacity": "0",
                    "transform": "translateY(20px)"
                },
                "100%": {
                    "opacity": "1",
                    "transform": "translateY(0)"
                }
            }
        },
    },
    plugins: [],
}

