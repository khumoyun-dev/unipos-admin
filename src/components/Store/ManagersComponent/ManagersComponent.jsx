import React from 'react'
import { Link } from 'react-router-dom'
import BiPersonIcon from '../../../assets/Svgs/BiPersonIcon'
import StarIcon from '../../../assets/Svgs/StarIcon'
import "./ManagersComponent.scss"

function ManagersComponent({ buttonText, buttonLink }) {
    return (
        <div className="store__managers">
            <div className="managers__title">
                <p>Do’kon boshqaruvi</p>
                <button>
                    {/* <Link to={buttonLink}> */}
                        {buttonText}
                    {/* </Link> */}
                </button>
            </div>
            <ul className="managers__list">
                <li className="managers__item">
                    <div className="managers__about">
                        <div className="managers__img img1"></div>
                        <div className="managers__details">
                            <p className="managers__name">Zilola Talipova</p>
                            <span className="managers__job-title">Owner</span>
                        </div>
                    </div>
                    <BiPersonIcon />
                </li>
                <li className="managers__item">
                    <div className="managers__about">
                        <div className="managers__img img2"></div>
                        <div className="managers__details">
                            <p className="managers__name">Amal Jamshidov</p>
                            <span className="managers__job-title">Administrator</span>
                        </div>
                    </div>
                    <StarIcon />
                </li>
            </ul>
        </div>
    )
}

export default ManagersComponent