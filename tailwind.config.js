const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    content: ['./**/*.html' /* ... */ ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            blue: colors.blue,
            gray: colors.gray,
            neutral: colors.neutral,
            slate: colors.slate,
            amber: colors.amber,
            yellow: colors.yellow,
            red: colors.red,
            teal: colors.teal,
            'transparent': 'transparent',
            'white': '#FFFFFF',
            'light-green': 'rgba(13, 148, 136, 0.05)',
            'backdrop': 'rgba(23, 23, 23, 0.8)',
        },
        fontSize: {
            'xs': '12px',
            'sm': '13px',
            'md': '14px',
            'tiny': '15px',
            'base': '16px',
            'xl': '17px',
            '2xl': '18px',
            '3xl': '19px',
            '4xl': '20px',
            '5xl': '22px',
            '6xl': '24px',
            '7xl': '28px',
            '8xl': '34px',
        },
        lineHeight: {
            'xl': '17px',
            '2': '20px',
            '3': '21px',
            '4': '22px',
            '5': '24px',
            '6': '26px',
            '7': '28px',
            '8': '30px',
            '9': '40px',
            '10': '44px', 
        },
        fontFamily: {
            themeFont: ['Roboto', 'sans-serif'],
        },
        extend: {
            boxShadow: {
                'box': '0px 3px 4px 1px rgba(0, 0, 0, 0.18)',
            },
            gridTemplateColumns: {
                'footer': 'auto 192px 218px 117px 106px', 
                'footer-lg': '192px 218px 270px 230px', 
                'footer-md': '202px 200px 110px 110px', 
            },
            backgroundImage: {        
                'arrow': "url('../../assets/images/arrow.svg')",
                'check': "url('../../assets/images/check.svg')",
                'checked': "url('../../assets/images/checked.svg')",
            },
        } 
    },
    variants: {
        extend: {},
    },
    plugins: [],
}