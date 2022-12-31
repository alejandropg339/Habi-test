import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "../slices/ModalSlice";
import { salesDataSlice } from "../slices/SalesDataSlice";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

const salesDataPersistedReducer = persistReducer(persistConfig, salesDataSlice.reducer)

export const store = configureStore({
    reducer: {
        salesData: salesDataPersistedReducer,
        modal: modalSlice.reducer
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>