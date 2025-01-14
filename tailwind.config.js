/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Jaldi", "sans-serif"],
                body: ["Inter", "sans-serif"],
                nav: ["Roboto Flex", "sans-serif"],
            },
            colors: {
                "gradient-start": "#C4ADD2",
                "gradient-middle": "#5B5375",
                "gradient-end": "#0F1015",
            },
            backgroundImage: (theme) => ({
                "gradient-to-b":
                    "linear-gradient(to bottom, var(--tw-gradient-stops))",
            }),
        },
    },
    plugins: [],
};
