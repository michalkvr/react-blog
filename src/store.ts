import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from './features/articles/articlesSlice';
import userSlice from './features/user/userSlice';
// ...

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
