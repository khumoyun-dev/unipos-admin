import React from 'react'
import { Link } from 'react-router-dom'
import EditIcon from '../../../assets/Svgs/EditIcon'
import BackArrow from '../../../assets/Svgs/BackArrow'
import BiPersonIcon from '../../../assets/Svgs/BiPersonIcon'
import ScanIcon from '../../../assets/Svgs/ScanIcon'
import StarIcon from '../../../assets/Svgs/StarIcon'
import storeImg from "../../../assets/images/StoreImg.jpg"
import SubNavbar from '../../Navbar/SubNavbar/SubNavbar'

import "./MyStore.scss"
import ManagersComponent from '../ManagersComponent/ManagersComponent'

function MyStore() {
    return (
        <div className="mystore__wrapper">
            <SubNavbar title="Texnomart" link="edit" buttonIcon={<EditIcon color="white" />} buttonText="Tahrirlash" />
            <div className="mystore__main">
                <div className="store__about">
                    <div className="store__img">
                        <img src={storeImg} alt="img" />
                    </div>
                    <div className="store__details">
                        <div className="store__title">
                            <div className="store__name">
                                <b>Texnomart</b> do'koni
                            </div>
                            <div className="store__category">
                                maishiy texnika va elektronika
                            </div>
                        </div>
                        <ul className="store__details-list">
                            <li className="store__details-item">
                                <p className="item-title">Biznes nomi</p>
                                <p className="item-description">OOO ”Texnomart”</p>
                            </li>
                            <li className="store__details-item">
                                <p className="item-title">Email</p>
                                <p className="item-description">Texnomart@mail.ru</p>
                            </li>
                            <li className="store__details-item">
                                <p className="item-title">Telefon raqam</p>
                                <p className="item-description">+99891 166 66 66</p>
                            </li>
                            <li className="store__details-item">
                                <p className="item-title">Valyuta</p>
                                <p className="item-description currency">UZS</p>
                            </li>
                            <li className="store__details-item">
                                <p className="item-title">Asos solingan sana</p>
                                <p className="item-description">12.12.2021</p>
                            </li>
                            <li className="store__details-item link">
                                <p className="item-title">Link</p>
                                <div className="item-link">
                                    <a href="https://t.me/unipos">Telegram</a>
                                </div>
                            </li>
                            <li className="store__details-item link">
                                <p className="item-title">Link</p>
                                <div className="item-link">
                                    <a href="https://instagram.com/unipos">Instagram</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mystore__features">
                    <div className="store__tariff">
                        <p>TARIF</p>
                        <span>Standart</span>
                    </div>
                    <div className="store__code">
                        <Link className='store__code-link' to="code">
                            <ScanIcon />
                            <p>Foydalanuvchilarni do’konga qo’shish kodi</p>
                        </Link>
                    </div>
                    <ManagersComponent buttonLink="add-admin" buttonText="Admin qo'shish" />
                </div>
            </div>
        </div>
    )
}

export default MyStore