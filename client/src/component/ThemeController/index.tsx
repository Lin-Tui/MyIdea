import * as React from 'react';
import { VechaiProvider, extendTheme } from '@vechaiui/react';
import { blueLight, blueDark, redDark } from '../../config/theme.config';
export type ThemeContextType = {
    colorScheme?: string;
    setColorScheme: (colorScheme: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

export const themes = [
    {
        name: 'BlueLight',
        id: 'blueLight',
        backgroundColor: blueLight.colors.bg.base,
        primaryColor: blueLight.colors.primary['500'],
    },
    {
        name: 'BlueDark',
        id: 'blueDark',
        backgroundColor: blueDark.colors.bg.base,
        primaryColor: blueDark.colors.primary['500'],
    },
    {
        name: 'RedDark',
        id: 'redDark',
        backgroundColor: redDark.colors.bg.base,
        primaryColor: redDark.colors.primary['500'],
    },
];

function ThemeController({ children }: { children: React.ReactNode }) {
    const [colorScheme, setColorScheme] = React.useState(themes[0].id);

    const theme = React.useMemo(() => {
        return extendTheme({
            colorSchemes: {
                blueLight,
                blueDark,
                redDark,
            },
        });
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                colorScheme,
                setColorScheme,
            }}
        >
            <VechaiProvider theme={theme} colorScheme={colorScheme}>
                {children}
            </VechaiProvider>
        </ThemeContext.Provider>
    );
}

export const useTheme = (): ThemeContextType =>
    React.useContext(ThemeContext) || {
        colorScheme: 'blueLight',
        setColorScheme: () => null,
    };

export default ThemeController;
