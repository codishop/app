import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary: {
            50: '#E3F2F9',
            100: '#C5E4F3',
            200: '#A2D4EC',
            300: '#7AC1E4',
            400: '#47A9DA',
            500: '#0088CC',
            600: '#007AB8',
            700: '#006BA1',
            800: '#005885',
            900: '#003F5E',
        },
        secondary: {
            50: '#FEEBC8',
            100: '#FBD38D',
            200: '#F7B052',
            300: '#F49317',
            400: '#CC7A04',
            500: '#A36203',
            600: '#7C4A02',
            700: '#573100',
            800: '#301A00',
            900: '#1A0C00',
        },
        // Adicione mais cores conforme necessário
    },
    fonts: {
        body: 'Roboto, sans-serif',
        heading: 'Poppins, sans-serif',
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    // Adicione mais estilos conforme necessário
});

export default theme;
