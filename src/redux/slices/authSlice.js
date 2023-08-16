import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: null,
    error: '',
    loading: true,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});


export const { setUser, setError, setLoading } = authSlice.actions;
export default authSlice.reducer;