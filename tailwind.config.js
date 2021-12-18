module.exports = {
    mode: 'jit',
    content: ['./**/*.html' /* ... */ ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            'transparent': 'transparent',
            'white': '#FFFFFF',
            'theme-yellow': '#FBBF24',
            'dark-blue': '#374151',
            'theme-green': '#0D9488',
            'theme-green-hovered': '#0A7A70',
            'font-color': '#171717',
            'font-gray': '#525252',
            'light-gray': '#F5F5F5',
            'light-white': '#F9FAFB',
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
        } 
    },
    variants: {
        extend: {},
    },
    plugins: [],
}