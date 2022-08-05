import React from 'react'
import ColoredStatsItem from '../ColoredStatsItem/ColoredStatsItem'
import "./Dashboard.scss"
import LineChart from '../LineChart/LineChart'
import MoreSalesStaff from '../MoreSalesStaff/MoreSalesStaff'
import TopProductItem from '../ProductItem/TopProductItem/TopProductItem';

import item from "../ColoredStatsItem/db";

function Dashboard() {

  return (
    <div className='dashboard'>
    
      <ul className="colored__list">
        <ColoredStatsItem id={item[0].id} icon={item[0].icon} number={item[0].number} title={item[0].title} color={item[0].color}  />

        <ColoredStatsItem id={item[1].id} icon={item[1].icon} number={item[1].number} title={item[1].title} color={item[1].color}  />

        <ColoredStatsItem id={item[2].id} icon={item[2].icon} number={item[2].number} title={item[2].title} color={item[2].color}  />

        <ColoredStatsItem id={item[3].id} icon={item[3].icon} number={item[3].number} title={item[3].title} color={item[3].color}  />

        <ColoredStatsItem id={item[4].id} icon={item[4].icon} number={item[4].number} title={item[4].title} color={item[4].color}  />

        <ColoredStatsItem id={item[5].id} icon={item[5].icon} number={item[5].number} title={item[5].title} color={item[5].color}  />
      </ul>

      <div className="dashboard__column2">
        <LineChart />
        <MoreSalesStaff />
      </div>

      <TopProductItem />
      
    </div>
  )
}

export default Dashboard