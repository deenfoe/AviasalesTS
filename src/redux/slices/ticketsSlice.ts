import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { ITicketsState, IFetchTicketsResponse } from '../../interfaces/ticketsTypes'

const initialState: ITicketsState = {
  searchId: null,
  tickets: [],
  loading: false,
  error: null,
  stop: false,
  displayedTicketsCount: 5,
}

// создаем асинхронный thunk для получения searchId
export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async () => {
  const response = await axios.get('https://aviasales-test-api.kata.academy/search')
  return response.data.searchId
})

// Создаем асинхронный thunk для получения билетов
export const fetchTickets = createAsyncThunk<IFetchTicketsResponse, string, { rejectValue: string }>(
  'tickets/fetchTickets',
  async (searchId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
      return response.data
    } catch (error) {
      const axiosError = error as AxiosError
      return rejectWithValue(axiosError.message || 'Ошибка получения searchId')
    }
  }
)

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    showMoreTickets: (state) => {
      state.displayedTicketsCount += 5
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload
        state.loading = false
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.loading = false
        state.error = action.error?.message || 'Unknown error'
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.tickets = [...state.tickets, ...action.payload.tickets]
        state.stop = action.payload.stop
        state.loading = false
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ? String(action.payload) : action.error?.message || 'Unknown error'
      })
  },
})

export const { showMoreTickets } = ticketsSlice.actions

export const selectDisplayedTicketsCount = (state: { tickets: ITicketsState }) => state.tickets.displayedTicketsCount
export const selectTickets = (state: { tickets: ITicketsState }) => state.tickets.tickets
export const selectLoading = (state: { tickets: ITicketsState }) => state.tickets.loading
export const selectError = (state: { tickets: ITicketsState }) => state.tickets.error
export const selectStop = (state: { tickets: ITicketsState }) => state.tickets.stop
export const selectSearchId = (state: { tickets: ITicketsState }) => state.tickets.searchId

export default ticketsSlice.reducer
