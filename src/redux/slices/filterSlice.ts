import { createSlice } from '@reduxjs/toolkit'

import { IFilterState, IFilters } from '../../interfaces/filterTypes'

const initialState: IFilterState = {
  filters: {
    allChecked: true,
    noStops: true,
    oneStop: true,
    twoStops: true,
    threeStops: true,
  },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      state.filters[action.payload as keyof IFilters] = !state.filters[action.payload as keyof IFilters]
      // Проверка, все ли фильтры включены
      if (state.filters.noStops && state.filters.oneStop && state.filters.twoStops && state.filters.threeStops) {
        state.filters.allChecked = true
      } else {
        state.filters.allChecked = false
      }
    },
    toggleAll: (state) => {
      state.filters.allChecked = !state.filters.allChecked
      state.filters.noStops = state.filters.allChecked
      state.filters.oneStop = state.filters.allChecked
      state.filters.twoStops = state.filters.allChecked
      state.filters.threeStops = state.filters.allChecked
    },
    uncheckAllFilters: (state) => {
      state.filters.allChecked = false
    },
  },
})

export const { toggleFilter, toggleAll, uncheckAllFilters } = filterSlice.actions
export const selectAllChecked = (state: { filter: IFilterState }) => state.filter.filters.allChecked
export const selectFilters = (state: { filter: IFilterState }) => state.filter.filters

export default filterSlice.reducer
