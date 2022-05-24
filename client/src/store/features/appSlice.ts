import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveNavMenu {
    parentPath?: string;
    path: string;
}
export interface Appstate {
    activeNavMenu: ActiveNavMenu;
}
export const appSlice = createSlice({
    name: 'app',
    initialState: {
        activeNavMenu: {},
    } as Appstate,
    reducers: {
        setActiveNavMenu: (state, action: PayloadAction<Appstate>) => {
            state.activeNavMenu = action.payload.activeNavMenu;
        },
    },
});
export const appActions = appSlice.actions;
