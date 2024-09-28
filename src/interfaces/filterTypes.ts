export interface IFilters {
  allChecked: boolean
  noStops: boolean
  oneStop: boolean
  twoStops: boolean
  threeStops: boolean
}

export interface IFilterState {
  filters: IFilters
}

export interface IButton {
  id: number
  label: string
  status: boolean
}
