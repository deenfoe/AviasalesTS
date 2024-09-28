import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './slices/filterSlice'
import ticketsReducer from './slices/ticketsSlice'
import ticketSortReducer from './slices/ticketSortSlice'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    tickets: ticketsReducer,
    ticketSort: ticketSortReducer,
  },
})

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
