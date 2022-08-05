import React, { useRef } from 'react'
import "./ProfileAbout.scss"
import SubNavbar from '../../Navbar/SubNavbar/SubNavbar'
import EditIcon from '../../../assets/Svgs/EditIcon'
import BackArrow from '../../../assets/Svgs/BackArrow'
import { Link } from 'react-router-dom'
import EditIcon2 from '../../../assets/Svgs/EditIcon2'
import TickBadge from "../../../assets/Svgs/TickBadge"

function ProfileAbout() {
    const inputFileRef = useRef();

    const onFileChangeCapture = (e) => {
        console.log(e.target.files);
    };

    const FileInputClick = () => {
        inputFileRef.current.click();
    }

    return (
        <>
            <SubNavbar title="Zilola Talipova" link="edit" buttonIcon={<EditIcon color="#ffffff" />} buttonText="Tahrirlash" backIcon={<BackArrow />} />

            <div className="about-wrapper">
                <div className="left">
                    <div className="admin-contact-details">
                        <div className="img">
                            <div className="camera" onClick={FileInputClick}>
                                <input ref={inputFileRef} onChangeCapture={onFileChangeCapture} type="file" id="file-input" className='visually-hidden' />
                            </div>
                        </div>
                        <div className="admin-details">
                            <div className="admin-contacts">
                                <div>
                                    <span>Ism va Familya</span>
                                    <p>Zilola Talipova</p>
                                </div>
                                <div>
                                    <span>Kasbi</span>
                                    <p>Admin</p>
                                </div>
                                <div>
                                    <span>Ishga qabul qilingan sana</span>
                                    <p>20 Dekabr 2021</p>
                                </div>
                                <div>
                                    <span>Telefon raqam</span>
                                    <p>+9989 98 166 66 66</p>
                                </div>
                            </div>
                            <div className="reset-password">
                                <Link to="reset-password" className='link'>
                                    <p>Parolni yangilash</p>
                                    <span> <EditIcon2 /> </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="permissions-wrp">
                        <div className="permissions-title">
                            <p>Ruxsat berish sozlamalari</p>
                        </div>
                        <ul className="permissions-list">
                            <li className="permissions-item">
                                <p>Mahsulotlar qo’sha olish</p>
                                <span> <TickBadge /> </span>
                            </li>
                            <li className="permissions-item">
                                <p>Narxlarni o’zgartira olish</p>
                                <span> <TickBadge /> </span>
                            </li>
                            <li className="permissions-item">
                                <p>Hisobotlarga kirish</p>
                                <span> <TickBadge /> </span>
                            </li>
                            <li className="permissions-item">
                                <p>Foydalanuvchi qo’sha olish</p>
                                <span> <TickBadge /> </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAbout