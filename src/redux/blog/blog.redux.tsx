import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IBlogData {
    id: string;
    title: string;
    content: string;
}

export interface IBlogState {
    data: IBlogData[];
}

const initialState: IBlogState = {
    data: [],
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlog: (state, action: PayloadAction<IBlogData>) => {
            state.data.push(action.payload);
        },
        deleteBlog: (state, action: PayloadAction<IBlogData>) => {
            state.data = state.data.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
