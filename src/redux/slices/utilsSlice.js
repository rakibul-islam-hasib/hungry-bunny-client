import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFooter: false,
};

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setFooter: (state, action) => {
            state.isFooter = action.payload;
        },
    }
});

export const { setFooter } = utilsSlice.actions;
export default utilsSlice.reducer;