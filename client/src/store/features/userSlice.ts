import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    username: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
    } as UserState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserState>) => {
            state.username = action.payload.username;
        },
    },
});

export const userActions = userSlice.actions;
