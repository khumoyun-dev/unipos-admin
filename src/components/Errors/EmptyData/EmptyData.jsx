import React from 'react'
import { Link } from 'react-router-dom'
import EmptyDataIcon from '../../../assets/Svgs/EmptyDataIcon'
import "./EmptyData.scss"

function EmptyData({text, buttonText, link}) {
  return (
    <div className="wrapper">
        <EmptyDataIcon />
        <p>{text} hali yoq, qo’shish uchun + tugmasini bosing!</p>
        <Link to={link}><button>+ {buttonText} qo’shish</button></Link>
    </div>
  )
}

export default EmptyData