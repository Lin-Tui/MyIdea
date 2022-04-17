module.exports = {
    mode: 'jit',
    purge: [
        // ...
        './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}', // path to vechaiui
    ],
    darkMode: 'class', // or 'media' or 'class'
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@vechaiui/core')],
};
