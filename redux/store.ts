import { configureStore } from '@reduxjs/toolkit'
import basketReduce from './basketSlice'
// ...

export const store = configureStore({
  reducer: {
    basket:basketReduce
  },
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch