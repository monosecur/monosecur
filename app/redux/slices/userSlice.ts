import { createSlice } from '@reduxjs/toolkit';
import {DateTime} from "next-auth/providers/kakao";

const initialState: { user: IUser | null } = {
    user: null,
};

interface IUser {
    id: string;
    name?: string;
    email?: string;
    emailVerified?: DateTime;
    image?: string;
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;