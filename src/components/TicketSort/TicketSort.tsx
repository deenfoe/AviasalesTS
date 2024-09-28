import { useDispatch, useSelector } from 'react-redux'

import { IButton } from '../../interfaces/filterTypes'
import { selectButtons, setActiveButton } from '../../redux/slices/ticketSortSlice'

import styles from './TicketSort.module.scss'

function TicketSort() {
  const dispatch = useDispatch()
  const sortedButtons: IButton[] = useSelector(selectButtons)

  function onActiveButton(buttonLabel: string) {
    dispatch(setActiveButton(buttonLabel))
  }

  return (
    <div className={styles.ticketSort}>
      {sortedButtons.map((button) => {
        return (
          <button
            key={button.id}
            className={`${styles.ticketSortBtn} ${button.status ? styles.active : ''}`}
            onClick={() => onActiveButton(button.label)}
          >
            {button.label}
          </button>
        )
      })}
    </div>
  )
}

export default TicketSort
