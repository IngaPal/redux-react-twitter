import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import statsReducer from './statsSlice';

export const store = configureStore({
    reducer: {
    user: userReducer,
    stats: statsReducer,
},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;