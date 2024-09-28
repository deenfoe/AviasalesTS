export interface ISegment {
  origin: string
  destination: string
  date: string
  stops: string[]
  duration: number
}

export interface ITicket {
  price: number
  carrier: string
  segments: ISegment[]
}

export interface ITicketsState {
  searchId: string | null
  tickets: ITicket[]
  loading: boolean
  error: string | null
  stop: boolean
  displayedTicketsCount: number
}

export interface IFetchTicketsResponse {
  tickets: ITicket[]
  stop: boolean
}
