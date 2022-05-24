import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Appstate {}
export const appSlice = createSlice({
    name: 'app',
    initialState: {
        activeNavMenu: {},
    } as Appstate,
    reducers: {
        setActiveNavMenu: (state, action: PayloadAction<Appstate>) => {},
    },
});
export const appActions = appSlice.actions;
