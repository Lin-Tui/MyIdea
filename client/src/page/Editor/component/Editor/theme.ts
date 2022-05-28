import { EditorView } from '@codemirror/view';
export const blueLightThemeOption = EditorView.theme(
    {
        '&': {
            backgroundColor: '#fff',
        },
        '.cm-gutters': {
            backgroundColor: '#f4f4f5',
        },
    },
    {
        dark: false,
    }
);

export const blueDarkThemeOption = EditorView.theme(
    {
        '&': {
            backgroundColor: '#18181b',
        },
        '.cm-activeLine': {
            backgroundColor: '#27272a',
        },
    },
    {
        dark: true,
    }
);
export const eidtorThemeMap: Record<string, any> = {
    blueLight: blueLightThemeOption,
    blueDark: blueDarkThemeOption,
};
