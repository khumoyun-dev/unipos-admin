import React from 'react'
import "./ColoredStatsItem.scss"

function ColoredStatsItem({ id, icon, number, title, color }) {

  function numberFormatter(number) {
    return number.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(" ");
  }

  return (
    <li key={id} style={{ backgroundColor: color }} className="colored__item">
      <div className="colored__icon">
        <span>{icon}</span>
      </div>
      <span className='colored__number'>{numberFormatter(number)}</span>
      <span className='colored__title'>{title}</span>
    </li>
  )
}

export default ColoredStatsItem;