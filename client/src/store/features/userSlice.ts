import { createSlice } from '@reduxjs/toolkit';

export interface userState {
    username: string;
}

const initialState: userState = {
    username: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userSlice.reducer;
