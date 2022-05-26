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
                40: '40px',
                50: '50px',
            },
            height: {
                400: '400px',
                100: '100px',
                60: '60px',
                50: '50px',
                40: '40px',
                20: '20px',
            },
            width: {
                300: '300px',
                200: '200px',
                150: '150px',
                170: '170px',
                100: '100px',
                20: '20px',
            },
            inset: {
                50: '145px',
                '-28': '-28px',
            },
            boxShadow: {
                navigation: '0px 0px 3px 0px rgb(190, 189, 189)',
            },
            borderColor: {
                gray1: '#86909c',
            },
            gridTemplateRows: {
                layout: '60px 1fr 40px',
                editorLayout: '50px 1fr 1fr',
            },
            gridTemplateColumns: {
                layout: '250px 1fr',
                editorLayout: '2fr 3fr',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@vechaiui/core')],
};
