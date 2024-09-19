import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

const initialState: User = {
    name: 'MP',
    avatar: 'https://gravatar.com/avatar/000?d=mp'
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    changeName: (state, action: PayloadAction<string>) => {
        state.name = action.payload || state.name;
    },
    changeAvatar: (state, action: PayloadAction<string>) => {
        state.avatar = action.payload || state.avatar;
    }
}
});

export const { changeName, changeAvatar } = userSlice.actions;
export default userSlice.reducer;