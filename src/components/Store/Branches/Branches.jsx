import React from 'react'
import { Link } from 'react-router-dom';

import "./Branches.scss"
import SubNavbar from "../../Navbar/SubNavbar/SubNavbar"
import branches from './branch';
import BoxIcon from "../../../assets/Svgs/Box2Icon"
import BasketIcon from "../../../assets/Svgs/BasketIcon"
import LocationIcon from "../../../assets/Svgs/LocationIcon"
import CalendarIcon from "../../../assets/Svgs/CalendarIcon"


function Branches() {

    function numberFormatter(number) {
        return number.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(" ");
    }

    let content = [];

    for (let i = 1; i <= 6; i++) {
        content.push(
            <Link to={`branch/${branches.id}`}>
                <li key={branches.id} className="branches__item">
                    <div className="branch-img"
                    // style={{ backgroundImage: `url(${branches.branchImg})` }}
                    ></div>

                    <div className="branch__details">
                        <div className="branch__location">
                            <span> <LocationIcon /> </span>
                            <p className="branch__title">{branches.branchName}</p>
                            <p className='branch__subtitle'>filial do’koni</p>
                        </div>
                        <div className="branch__date-time">
                            <span> <CalendarIcon /> </span>
                            <p className='branch__date'>{branches.date}</p>
                            <p className='branch__time'>{branches.time}</p>
                        </div>
                        <div className="branch__products">
                            <div className="products all-products">
                                <div className="products-details">
                                    <span className="products-count">{numberFormatter(branches.all_products)}</span>
                                    <p className='products-text'>Do’kondagi <br></br> mahsulotlar</p>
                                </div>
                                <div className="products-icon">
                                    <BoxIcon />
                                </div>
                            </div>
                            <div className="products weekly-products">
                                <div className="products-details">
                                    <span className="products-count">{numberFormatter(branches.weekly_products)}</span>
                                    <p className='products-text'>Xaftalik sotilgan <br></br> mahsulotlar</p>
                                </div>
                                <div className="products-icon">
                                    <BasketIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }

    return (
        <div className="branches__wrapper">
            <SubNavbar title="Filiallar" link="/add-branch" buttonIcon="+" buttonText="Filial qo'shish" />

            <ul className="branches__list">
                {
                    content
                }
            </ul>

        </div>
    )
}

export default Branches