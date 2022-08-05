import React from 'react'
import "./MoreSalesStaff.scss"
import UserIcon from "../../assets/Svgs/UserIcon";
import moreSalesStaff from './db';

function MoreSalesStaff() {
  let content = [];

  for (let i = 1; i <= 5; i++) {
    content.push(
      <li li key={moreSalesStaff.id} className="moreSales__item">
        <div className="moreSales__staffpart">
          <UserIcon className="usericon" />
          <div className="staff_details">
            <p className='staff_name'>{moreSalesStaff.fullname}</p>
            <p className='staff_title'>{moreSalesStaff.jobtitle}</p>
          </div>
        </div>
        <div className="moreSales__extrapart">
          <p className='branchName'>{moreSalesStaff.branch}</p>
          <p className='checks'>Cheklar soni: <span className='checks__no'>{moreSalesStaff.checks}</span></p>
        </div>
      </li>
    )
  }

  return (
    <div div className="moreSales__wrapper" >
      <div className="moreSales__title">
        <span>Ko’p savdo qilgan hodimlar</span>
      </div>
      <ul className="moreSales__list">
        {
          content
        }
      </ul>
    </div>
  )
}

export default MoreSalesStaff;