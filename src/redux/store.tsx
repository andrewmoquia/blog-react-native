import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blog/blog.redux';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { appEnv } from '../helper/config.helper';

export const store = configureStore({
    reducer: combineReducers({
        blog: blogReducer,
    }),
    middleware: () => {
        const middlewares = [];
        appEnv === 'development' && middlewares.push(logger);
        return [...middlewares] as const;
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
