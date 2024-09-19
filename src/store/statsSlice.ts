import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Stats } from '../types';

const initialState: Stats = {
    followers: 0,
    following: 0
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
    changeStats: (state, action: PayloadAction<{ statsType: keyof Stats; sum: number }>) => {
        const { statsType, sum } = action.payload;
        state[statsType] = Math.max(0, state[statsType] + sum);
    }
}
});

export const { changeStats } = statsSlice.actions;
export default statsSlice.reducer;