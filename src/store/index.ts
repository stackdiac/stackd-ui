import { configureStore } from '@reduxjs/toolkit'

import { StackdApi } from '../api/StackdApi'
import specOffcanvasStore from '../reducers/SpecOffcanvas'
import FormOffcanvasStore from '../reducers/FormOffcanvas'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
//import clusterSelectorStore from '../reducers/ClusterSelector'

export const store = configureStore({
  reducer: {
    [StackdApi.reducerPath] : StackdApi.reducer,
    SpecOffcanvasStore: specOffcanvasStore,    
    FormOffcanvasStore: FormOffcanvasStore,
  //  ClusterSelectorStore: clusterSelectorStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(StackdApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch