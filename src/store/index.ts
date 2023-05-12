import { configureStore } from '@reduxjs/toolkit'

import { StackdApi } from '../api/StackdApi'
import configFileOffcanvasStore from '../reducers/ConfigFileOffcanvas'

export const store = configureStore({
  reducer: {
    [StackdApi.reducerPath] : StackdApi.reducer,
    ConfigFileOffcanvasStore: configFileOffcanvasStore,    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(StackdApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch