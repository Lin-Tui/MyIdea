import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Appstate {}
export const appSlice = createSlice({
    name: 'app',
    initialState: {} as Appstate,
    reducers: {},
});
export const appActions = appSlice.actions;
