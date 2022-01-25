import { configureStore } from '@reduxjs/toolkit'
import basketReduce from './basketSlice'
import userReducer from "./AuthSlice"
// ...

export const store = configureStore({
  reducer: {
    basket:basketReduce,
    user:userReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch