import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFooter: false,
    isHero: false,
    isCheckoutOpen: false,
    totalPrice: 0,
    paymentInfo: null,
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
        setCheckoutOpen: (state, action) => {
            state.isCheckoutOpen = action.payload;
        },
        setTotalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        setPaymentInfo: (state, action) => {
            state.paymentIntent = action.payload;
        },
    }
});

export const { setFooter, setHero, setCheckoutOpen, setTotalPrice, setPaymentInfo } = utilsSlice.actions;
export default utilsSlice.reducer;