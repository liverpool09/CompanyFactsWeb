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
            'h1': ['34px', {
                lineHeight: '44px',
            }],
            'h1-md': ['24px', {
                lineHeight: '30px',
            }],
            'h2': ['28px', {
                lineHeight: '40px',
            }],
            'h2-md': ['20px', {
                lineHeight: '28px',
            }],
             
            'para': ['16px', {
                lineHeight: '26px',
            }],
            'para-md': ['14px', {
                lineHeight: '24px',
            }],
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