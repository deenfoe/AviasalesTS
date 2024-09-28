import { v4 as uuidv4 } from 'uuid'

import { formatDuration, formatStops, formatStopsList, formatFlightTimes, formatRoute } from '../../utils/formatters'
import { ITicket } from '../../interfaces/ticketsTypes'

import styles from './Ticket.module.scss'
import AirlineLogo from './AirlineLogo'

function Ticket({ ticket }: { ticket: ITicket }) {
  return (
    <li className={styles.ticket}>
      <div className={styles.ticketPriceCompany}>
        <span className={styles.ticketPrice}>{ticket.price.toLocaleString('ru-RU')} ₽</span>
        <AirlineLogo company={ticket.carrier} />
      </div>
      {ticket.segments.map((segment) => (
        <div key={uuidv4()} className={styles.ticketTransfers}>
          <div className={styles.ticketTransfer}>
            <div className={styles.ticketTransferInfo}>
              <span className={styles.ticketTransferTitle}>{formatRoute(segment.origin, segment.destination)}</span>
              <span className={styles.ticketTransferDesc}>{formatFlightTimes(segment.date, segment.duration)}</span>
            </div>
            <div className={styles.ticketTransferInfo}>
              <span className={styles.ticketTransferTitle}>В ПУТИ</span>
              <span className={styles.ticketTransferDesc}>{formatDuration(segment.duration)}</span>
            </div>
            <div className={styles.ticketTransferInfo}>
              <span className={styles.ticketTransferTitle}>{formatStops(segment.stops)}</span>
              <span className={styles.ticketTransferDesc}>{formatStopsList(segment.stops)}</span>
            </div>
          </div>
        </div>
      ))}
    </li>
  )
}

export default Ticket
