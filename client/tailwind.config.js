module.exports = {
    mode: 'jit',
    darkMode: 'class', // or 'media' or 'class'
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {},
            fontSize: {
                10: ['10px', '12px'],
                11: ['11x', '13px'],
                12: ['12px', '14px']

            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@vechaiui/core')],
};
