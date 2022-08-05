import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import BackArrow from '../../../../assets/Svgs/BackArrow'
import DeleteIcon from '../../../../assets/Svgs/DeleteIcon'
import MoveDotsIcon from '../../../../assets/Svgs/MoveDotsIcon'
import RightArrow from '../../../../assets/Svgs/RightArrow'
import SaveIcon from '../../../../assets/Svgs/SaveIcon'
import SmallStarIcon from "../../../../assets/Svgs/SmallStarIcon"
import CloudUploadIcon from "../../../../assets/Svgs/CloudUploadIcon"
import ErrRectangleIcon from "../../../../assets/Svgs/ErrRectangleIcon"

import "../MyStore.scss"
import "./Edit.scss"
import SubNavbar from '../../../Navbar/SubNavbar/SubNavbar'
import FileUploadComponent from '../../FileUploadComponent/FileUploadComponent'

function Edit() {

    return (
        <div className="mystore__wrapper">
            <SubNavbar title="Tahrirlash" link="/store/my/save" buttonIcon={<SaveIcon />} buttonText="Saqlash" backIcon={<BackArrow className="bar-backArrow" />} />
            <div className="mystore__main">
                <div className="main-left">
                    <div className="store__edit-card">
                        <label>
                            <p>Do’kon  / Brend  nomi<sup><SmallStarIcon /></sup></p>
                            <input type="text" defaultValue="Texnomart" />
                        </label>
                        <label>
                            <p>Do’kon turi <sup><SmallStarIcon /></sup></p>
                            <select>
                                <option value="na">Do’kon turini tanlang</option>
                            </select>
                        </label>
                        <label>
                            <p>Biznes nomi<sup><SmallStarIcon /></sup></p>
                            <input type="text" defaultValue="OOO “Texnomart”" />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type="mail" defaultValue="texnomart@mail.ru" />
                        </label>
                        <label>
                            <p>Telefon raqam<sup><SmallStarIcon /></sup></p>
                            <input type="text" defaultValue="+99891 166 66 66" />
                        </label>
                        <label>
                            <p>Valyuta <sup><SmallStarIcon /></sup></p>
                            <select>
                                <option value="uzs">UZS</option>
                                <option value="usd">USD</option>
                            </select>
                        </label>
                        <label>
                            <p>Hudud</p>
                            <select>
                                <option value="tas">Tashkent</option>
                                <option value="usa">California</option>
                            </select>
                        </label>
                        <label>
                            <p>Tuman</p>
                            <select>
                                <option value="ol">Olmazor tumani</option>
                                <option value="chi">Chilonzor tumani</option>
                            </select>
                        </label>
                    </div>
                    <div className="store__social-links">
                        <div className="social-links__title">
                            Ijtimoiy tarmoqlar
                        </div>
                        <ul className="social-links__list">
                            <li className="social-links__item">
                                <p>Ijtimoiy tarmoq-1</p>
                                <div className="item-wrapper">
                                    <div className='move-dots'>
                                        <MoveDotsIcon />
                                    </div>
                                    <select>
                                        <option value="tg">Telegram</option>
                                    </select>
                                    {/* <RightArrow /> */}
                                    <input type="text" defaultValue="t.me/texnomart" />
                                    <div className="delete-icon">
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </li>
                            <li className="social-links__item">
                                <p>Ijtimoiy tarmoq-2</p>
                                <div className="item-wrapper">
                                    <div className="move-dots">
                                        <MoveDotsIcon />
                                    </div>
                                    <select>
                                        <option value="ig">Instagram</option>
                                    </select>
                                    {/* <RightArrow /> */}
                                    <input type="text" defaultValue="instagram.com/texnomart" />
                                    <div className="delete-icon">
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="add-link">
                            <p>+ Variant turini qo’shish</p>
                        </div>
                    </div>
                </div>
                <div className="main-right">
                    <FileUploadComponent title="Logo" custom={true} />
                </div>
            </div>
        </div>
    )
}

export default Edit