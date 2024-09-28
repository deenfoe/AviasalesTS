export interface ITicketSorterItem {
  id: number
  label: string
  status: boolean
}

export interface ITicketSortState {
  ticketSorter: ITicketSorterItem[]
}
