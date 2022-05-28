import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExperimentState {
    htmlCode: string;
    cssCode: string;
    jsCode: string;
    srcDoc: string;
}
export const experimentSlice = createSlice({
    name: 'experiment',
    initialState: {
        htmlCode: '',
        cssCode: '',
        jsCode: '',
        srcDoc: '',
    } as ExperimentState,
    reducers: {
        setHtmlCode: (state, action: PayloadAction<{ htmlCode: string }>) => {
            state.htmlCode = action.payload.htmlCode;
        },
        setCssCode: (state, action: PayloadAction<{ cssCode: string }>) => {
            state.cssCode = action.payload.cssCode;
        },
        setJsCode: (state, action: PayloadAction<{ jsCode: string }>) => {
            state.jsCode = action.payload.jsCode;
        },
        setSrcDoc: state => {
            state.srcDoc = `<html>
            <body>${state.htmlCode}</body>
            <style>${state.cssCode}</style>
            <script>${state.jsCode}</script>
            </html>`;
        },
    },
});

export const experimentActions = experimentSlice.actions;
