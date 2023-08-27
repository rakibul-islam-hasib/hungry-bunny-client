import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFooter: false,
    isHero: false,
};

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setFooter: (state, action) => {
            state.isFooter = action.payload;
        },
        setHero: (state, action) => {
            state.isHero = action.payload;
        },
    }
});

export const { setFooter , setHero } = utilsSlice.actions;
export default utilsSlice.reducer;