import React, { useRef } from 'react'
import BackArrow from '../../../assets/Svgs/BackArrow'
import SaveIcon from '../../../assets/Svgs/SaveIcon'
import SmallStarIcon from '../../../assets/Svgs/SmallStarIcon'
import TickBadge from '../../../assets/Svgs/TickBadge'
import SubNavbar from '../../Navbar/SubNavbar/SubNavbar'
import "./EditSettings.scss"


function EditSettings() {
  const inputFileRef = useRef();

  const onFileChangeCapture = (e) => {
    console.log(e.target.files);
  };

  const FileInputClick = () => {
    inputFileRef.current.click();
  }

  return (
    <>
      <SubNavbar title="Zilola Talipova" link="save" buttonIcon={<SaveIcon color="#ffffff" />} buttonText="Saqlash" backIcon={<BackArrow />} />

      <div className="about-wrapper">
        <div className="left">
          <div className="admin-contact-details-edit">
            <div className="img">
              <div className="camera" onClick={FileInputClick}>
                <input ref={inputFileRef} onChangeCapture={onFileChangeCapture} type="file" id="file-input" className='visually-hidden' />
              </div>
            </div>
            <div className="admin-details">
              <div className="admin-contacts">
                <label className="label">
                  <p>Ism va Familya <sup><SmallStarIcon /></sup></p>
                  <input type="text" defaultValue="Zilola Talipova" />
                </label>
                <label className="label">
                  <p>Ro’yxatdan o’tgan sana <sup><SmallStarIcon /></sup></p>
                  <input className='input-date' type="date" />
                </label>
                <label className="label">
                  <p>Kasbi <sup><SmallStarIcon /></sup></p>
                  <select>
                    <option>Admin</option>
                    <option>Admin</option>
                  </select>
                </label>
                <label className="label">
                  <p>Telefon raqam <sup><SmallStarIcon /></sup></p>
                  <input type="tel" defaultValue="+998 91 166 66 66" />
                </label>
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

export default EditSettings