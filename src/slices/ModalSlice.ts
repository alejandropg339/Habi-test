import { createSlice } from '@reduxjs/toolkit';

export const initialModalState = {
    open: false
}


export const modalSlice = createSlice({
    name: 'modal',
    initialState: initialModalState,
    reducers: {
        setStateModal: (state, { payload }) => {
            state.open = payload.open;
        },
    }
})

export const {
    setStateModal
} = modalSlice.actions;