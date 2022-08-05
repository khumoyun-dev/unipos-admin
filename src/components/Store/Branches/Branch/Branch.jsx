import React, { Children, useState } from 'react'
import "./Branch.scss"
import SubNavbar from '../../../Navbar/SubNavbar/SubNavbar'
import EditIcon from "../../../../assets/Svgs/EditIcon";
import BackArrow from "../../../../assets/Svgs/BackArrow"
import ColoredStatsItem from '../../../ColoredStatsItem/ColoredStatsItem';

import MapComponent from "../../MapComponent/MapComponent"
import item from "../../../ColoredStatsItem/db";
import ManagersComponent from '../../ManagersComponent/ManagersComponent';

function Branch() {

    return (
        <div>
            <SubNavbar title="M. Ulug'bek filial do'koni" link="edit" buttonIcon={<EditIcon color="#ffffff" />} buttonText="Tahrirlash" backIcon={<BackArrow classname="bar-backArrow" />} />

            <div className="branch__wrapper">
                <div className="branch-left">
                    <ul className="colored-list">
                        <ColoredStatsItem id={item[0].id} icon={item[0].icon} number={item[0].number} title={item[0].title} color={item[0].color} />

                        <ColoredStatsItem id={item[1].id} icon={item[1].icon} number={item[1].number} title={item[1].title} color={item[1].color} />

                        <ColoredStatsItem id={item[2].id} icon={item[2].icon} number={item[2].number} title={item[2].title} color={item[2].color} />

                        <ColoredStatsItem id={item[5].id} icon={item[5].icon} number={item[5].number} title={item[5].title} color={item[5].color} />
                    </ul>
                    <div className="branch-details">
                        <div className="branch-img"></div>
                        <div className="branch-info">
                            <div className="info-name">
                                <span>Filial nomi</span>
                                <p>M. Ulugbek filiali</p>
                            </div>
                            <div className="info-extra">
                                <p className='info-muted'>Hudud</p>
                                <p className="info-bold">Toshkent shahar</p>
                            </div>
                            <div className="info-extra">
                                <p className='info-muted'>Tuman</p>
                                <p className="info-bold">Mirzo Ulug'bek</p>
                            </div>
                            <div className="info-extra">
                                <p className='info-muted'>Do'kon manzili</p>
                                <p className="info-bold">Sayram ko'chasi, 6-uy</p>
                            </div>
                        </div>
                    </div>
                    <div className="branch-timetable">
                        <div className="timetable-title">
                            <p>Do’kon ish vaqti</p>
                        </div>
                        <ul className="timetable-list">
                            <li className="timetable-item">
                                <p className="week">Dushanba</p>
                                <div className="wrap-time">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                            <li className="timetable-item">
                                <p className="week">Seshanba</p>
                                <div className="wrap-time">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                            <li className="timetable-item">
                                <p className="week">Chorshanba</p>
                                <div className="wrap-time">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                            <li className="timetable-item">
                                <p className="week">Payshanba</p>
                                <div className="wrap-time">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                            <li className="timetable-item">
                                <p className="week">Juma</p>
                                <div className="wrap-time">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                            <li className="timetable-item">
                                <p className="week">Shanba</p>
                                <div className="wrap-time">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                            <li className="timetable-item">
                                <p className="week">Yakshanba</p>
                                <div className="wrap-time last-wrap">
                                    <span className='day'>20</span>
                                    <span className="month">Fevral</span>
                                    <span className="time">9:00 - 19:00</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="branch-right">
                    <MapComponent />
                    <div className="branch-managers">
                        <ManagersComponent buttonText="Foydalanuvchi qo’shish" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Branch