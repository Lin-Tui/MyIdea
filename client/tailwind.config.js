module.exports = {
    mode: 'jit',
    darkMode: 'class', // or 'media' or 'class'
    content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                gray1: '#F3F4F6',
                gray2: '#4e5969',
            },
            fontSize: {
                10: ['10px', '12px'],
                11: ['11x', '13px'],
                12: ['12px', '14px'],
                25: ['25px', '27px'],
                30: ['30px', '34px'],
            },
            spacing: {
                80: '80px',
            },
            height: {
                400: '400px',
                100: '100px',
                60: '60px',
                20: '20px',
            },
            width: {
                200: '200px',
                150: '150px',
                170: '170px',
                100: '100px',
                20: '20px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@vechaiui/core')],
};
