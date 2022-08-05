import React from 'react';
import "./TopProductItem.scss"
import item from "./db";

function TopProductItem() {
  let content = [];

  for (let i = 1; i <= 20; i++) {
    content.push(
      <li className="item__wrapper" key={item.id}>
        <div className="item__img" style={{ backgroundImage: `url(${item.img})` }}>

        </div>
        <div className="item__details">
          <span className="item__rank"><b>#</b>{item.rank}</span>
          <p className="item__model">{item.model}</p>
          <p className="item__description">{item.description}</p>
        </div>
      </li>
    )
  }
  
  return (
    <div className='dashboard-column3'>
      <div className="column3-sections">
        <div className="section__top-products">
          <p>Top 20 mahsulotlar</p>
        </div>
        <div className="section__top-branches">
          <p>Top filiallar</p>
        </div>
      </div>
      <ul className="top-products__list">
        {
          content
        }
      </ul>
    </div>
  )
}

export default TopProductItem