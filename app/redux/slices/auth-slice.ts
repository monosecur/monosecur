import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : any = {
    session: {
        id: "strinzzzg",
    }
}

const sessionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        registerSession: (state, action: PayloadAction<any>) => {
            const { session } = action.payload;
            state.push({session})
        },
        deleteSession: (state, action: PayloadAction<any>) => {
            const sessionId = action.payload
            return state.filter((session: any) => session.id === sessionId);
        }
    }
})


export const { registerSession , deleteSession } = sessionSlice.actions;
export default sessionSlice.reducer;