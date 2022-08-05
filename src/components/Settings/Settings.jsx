import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logout from '../../assets/Svgs/Logout'
import RightArrow from '../../assets/Svgs/RightArrow'
import useToken from '../../hooks/useToken'
import KeyIcon from "../../assets/Svgs/KeyIcon"
import "./Settings.scss"
import EditIcon from '../../assets/Svgs/EditIcon'

function Settings() {

  const navigate = useNavigate();
  const [token, setToken] = useToken();
  function handleLogOut() {
    navigate("/", { replace: true });
    setToken(false);
  }

  return (
    <>
      <div className="settings__wrapper">
        <div className="settings__left">
          <div className="language">
            <p>Til</p>
            <div className="lang-set">
              <span className='flag'></span>
              <span className='lang'>O‘zbekcha</span>
            </div>
            <div className="arrow">
              <RightArrow />
            </div>
          </div>
          <div className="notification">
            <p>Xabarnoma</p>
            <input type="radio" />
          </div>
          <div className="password">
            <p>Parolni o’zgartirish</p>
            <div className="reset-password">
              <KeyIcon />
              <span>O’zgartirish</span>
            </div>
            <div className="arrow">
              <RightArrow />
            </div>
          </div>
          <div className="terms-of-use">
            <div className="icon"></div>
            <p>Foydalanish qoidalari</p>
            <div className="arrow">
              <RightArrow />
            </div>
          </div>
          <div className="instruction">
            <div className="icon"></div>
            <p>Yo’riqnoma</p>
            <div className="arrow">
              <RightArrow />
            </div>
          </div>
          <div className="about">
            <div className="icon"></div>
            <p>Ilova xaqida</p>
            <div className="arrow">
              <RightArrow />
            </div>
          </div>
          <div className="logout">
            <button className="logout-wrp" onClick={handleLogOut}>
              <Logout />
              <span className='logout-btn'>Chiqish</span>
            </button>
          </div>
        </div>
        <div className="settings__right">
          <div className="admin-wrp">
            <Link to="profile/:id">
              <div className="admin-details--1">
                <div className="img"></div>
                <div className="name">
                  <span>Ism va Familya</span>
                  <p>Zeboxon Kamilova</p>
                </div>
              </div>
              <div className="admin-details--2">
                <div className="contacts">
                  <div className="jobtitle">
                    <span>Kasbi</span>
                    <p>Administrator</p>
                  </div>
                  <div className="phone">
                    <span>Telefon raqam</span>
                    <p>+9989 98 166 66 66</p>
                  </div>
                </div>
                <Link to="edit">
                  <button>
                    <EditIcon color="#1425C5" />
                    <p>Tahrirlash</p>
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings