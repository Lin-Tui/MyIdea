import { ColorScheme, colors } from '@vechaiui/react';

// light theme
export const blueLight: ColorScheme = {
    id: 'blueLight',
    type: 'light',
    colors: {
        bg: {
            fill: 'white',
            base: colors.gray['100'],
        },
        text: {
            foreground: colors.gray['900'],
            muted: colors.gray['700'],
        },
        primary: colors.blue,
        neutral: colors.gray,
    },
};

// dark theme
export const blueDark: ColorScheme = {
    id: 'blueDark',
    type: 'dark',
    colors: {
        bg: {
            base: colors.gray['800'],
            fill: colors.gray['900'],
        },
        text: {
            foreground: colors.gray['100'],
            muted: colors.gray['300'],
        },
        primary: colors.blue,
        neutral: colors.gray,
    },
};

export const redDark: ColorScheme = {
    id: 'redDark',
    type: 'dark',
    colors: {
        bg: {
            base: colors.trueGray['900'],
            fill: colors.trueGray['900'],
        },
        text: {
            foreground: colors.trueGray['100'],
            muted: colors.trueGray['300'],
        },
        primary: colors.rose,
        neutral: colors.trueGray,
    },
};
