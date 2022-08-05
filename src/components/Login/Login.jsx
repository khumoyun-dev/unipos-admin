import { useState, useRef, useEffect } from "react";
import useToken from "../../hooks/useToken";
import { client } from "../../utils/api-client";
import { mask } from "../../utils/mask";
import InputMask from "react-input-mask";
import Loader from "../../assets/Svgs/Loader";
import Logo from "../../assets/Svgs/Logo";
import DownArrow from "../../assets/Svgs/DownArrow"
import "./Login.scss";
import ErrCircle from "../../assets/Svgs/ErrCircleIcon";
import ErrRectangle from "../../assets/Svgs/ErrRectangleIcon";
import { Link } from "react-router-dom";

const localStorageKey = '__auth_provider_token__'

function Login() {
  const phone = useRef(null);
  const password = useRef(null);
  const lang = useRef();
  const mainlist = useRef();
  const [err, setErr] = useState("");
  // const [phone, SetPhone] = useState("");
  // const [pwd, setPwd] = useState("");
  const [details, setDetails] = useState({ phone: '' });
  const [loader, setLoader] = useState("");
  const [setToken] = useToken(true);

  const [visible, setVisible] = useState(false);

  const [checked, setChecked] = useState(false);


  // function Signin(e) {
  //     setLoader(true);
  //     e.preventDefault();
  //     client("admins/login", {
  //         data: {
  //             phone: mask(phone.current.value),
  //             password: password.current.value,
  //         },
  //     })
  //         .then((data) => {
  //             if (data.ok) {
  //                 setLoader(false);
  //                 setToken(data.data)
  //             }
  //         })
  //         .catch((err) => {
  //             setLoader(false);
  //             setErr(err);
  //         })
  // }

  const [auth, setAuth] = useState("");

  function handleSubmit(e) {
    setLoader(true);
    e.preventDefault();

    const adminUser = {
      phone: "+998 97 722 28 29",
      password: "1234"
    };

    if (phone.current.value === adminUser.phone && password.current.value === adminUser.password) {
      setLoader(false);
      setToken(details.phone);
    }

    if (phone.current.value !== adminUser.phone && password.current.value === adminUser.password) {
      setLoader(false);
      setAuth("false-phone");
    }

    if (phone.current.value === adminUser.phone && password.current.value !== adminUser.password) {
      setLoader(false);
      setAuth("false-password");
    }

    if (phone.current.value !== adminUser.phone && password.current.value !== adminUser.password) {
      setLoader(false);
      setAuth("false");
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(prev => !prev);
  }

  const openHandler = () => {
    mainlist.current.classList.toggle("main-list--active");
    lang.current.classList.toggle('toggle-langs');
  }

  return (
    <div className="signin__wrapper">

      <div className="signin__part1">

        <div className="signin__logo-langs">
          <div className="logo-wrapper"><Logo className="signin__logo" /></div>
          <div ref={lang} className="langs-wrapper" onClick={openHandler}>
            <div ref={mainlist} className="signin__langs-list main-list">
              <span className={!checked ? "uz-flag" : checked ? "ru-flag" : ""}></span>
              <p className="lang-text">{!checked ? "O‘zbekcha" : checked ? "Русский" : ""}</p>
              <DownArrow />
            </div>
            <div className="dropdown__langs-list">
              <label className="signin__langs-list">
                <span className="uz-flag"></span>
                <p className="lang-text">O‘zbekcha</p>
                <input type="radio" name="language" value="uzb" defaultChecked={!checked ? true : false} onClick={prev => setChecked(!prev)} />
              </label>
              <label className="signin__langs-list">
                <span className="ru-flag"></span>
                <p className="lang-text">Русский</p>
                <input type="radio" name="language" value="rus" defaultChecked={!checked ? false : true} onClick={prev => setChecked(!prev)} />
              </label>
            </div>
          </div>
        </div>

        <form action="" autoComplete="off" className="signin__form" onSubmit={handleSubmit}>
          <div className="signin__title">
            <p>Kirish</p>
          </div>
          <label htmlFor="input-number" className="signin__label">
            <p>Telefon raqam</p>
            <InputMask
              name="phone"
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
              ref={phone}
              className={auth === "false-phone" ? "signin__input--err" : "signin__input"}
              mask="+999 99 999 99 99"
              maskChar=""
              id="input-number"
              type="tel"
              placeholder="+998 90 123 45 67"
              required
            />
          </label>
          <label htmlFor="input-password" className="signin__label" id="password-label">
            <div>
              <p>Parol</p>
              <Link to="/forgot-password"><p className="forgot-links">Parolni unutdingizmi?</p></Link>
            </div>
            <span className="password-wrapper">
              <input
                name="password"
                onChange={(e) => setDetails({ ...details, password: e.target.value })}
                ref={password}
                className={auth === "false-password" ? "signin__input--err" : "signin__input"}
                id="input-password"
                type={visible ? "text" : "password"}
                placeholder="Parolingizni kiriting"
                required
              />
              <i className={visible ? "bi-eye" : "bi bi-eye-slash"} id="eye" onClick={() => setVisible(prev => !prev)} />
            </span>
          </label>
          <button className="signin__btn" type="submit">
            {loader ? <Loader /> : "Kirish"}
          </button>
          <div className="signin__signup-link">
            <p>Ro’yxatdan o’tganmisiz?</p>
            <Link to="/login"><p className="forgot-links">Ro’yxatdan o’tish</p></Link>
          </div>
        </form>

        {
          auth === "false-phone" && <div className="err-notification">
            <ErrCircle />
            <p>Telefon raqam xato kiritildi!</p>
            <ErrRectangle />
          </div>
        }
        {
        }
        {
          auth === "false-password" && <div className="err-notification">
            <ErrCircle />
            <p>Parol xato kiritildi.</p>
            <ErrRectangle />
          </div>
        }
        {
          auth === "false" && <div className="err-notification">
            <ErrCircle />
            <p>Telefon raqam va parol xato kiritildi.</p>
            <ErrRectangle />
          </div>
        }

        <div className="part1__email">
          <p>Unipos@gmail.com</p>
        </div>

      </div>

      <div className="signin__part2">
        {/* <div className="signin__greeting">
          <h1>Assalomu alaykum!</h1>
          <p>UniPOS platformasining rasmiy <br /> ilovasiga xush kelibsiz</p>
        </div>
        <div className="dashboard-img">
          <div className="staff staff-1">
            <div className="comment">
              <span className="emoji">👍</span>
            </div>
          </div>
          <div className="staff staff-2">
            <div className="comment">
                <span> <span className="emoji">😎</span> 1.2K</span>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Login;


// return (
//   <div className="login__container">
//     <div className="login__wrapper">
//       <div className="login__bg">
//         <img className="login__bg-img" src={Logo} alt="logo" />
//         <div className="circle"></div>
//         <div className="circle circle--t"></div>
//       </div>
//       <form className="login__form" onSubmit={handleSubmit}>
//         <h1 className="login__title">Log in</h1>
//         {/* <form className="login__form" onSubmit={(e) => Signin(e)}> */}
//         {/* <label className="login__form-label" htmlFor="input-number">
//                       Phone number
//                   </label> */}
//         {/* <InputMask
//         name="phone"
//         onChange={(e) => setDetails({...details, phone: e.target.value})}
//         ref={phone}
//         className="login__input"
//         mask="999 99 999-99-99"
//         id="input-number"
//         type="tel"
//         placeholder="998 90 123 45 67"
//         required
//       /> */}
//         <input
//           name="phone"
//           onChange={(e) => setDetails({ ...details, phone: e.target.value })}
//           // value={details.phone}
//           ref={phone}
//           className="login__input"
//           mask="999 99 999-99-99"
//           id="input-number"
//           type="tel"
//           placeholder="998 90 123 45 67"
//           required
//         />
//         {/* <label className="login__form-label" htmlFor="input-password">
//                       Password
//                   </label> */}
//         <input
//           name="password"
//           onChange={(e) => setDetails({ ...details, password: e.target.value })}
//           // value={details.password}
//           ref={password}
//           className="login__input"
//           id="input-password"
//           type="password"
//           placeholder="Password"
//           required
//         />

//         <button className="login__btn" type="submit">
//           {loader ? <Loader /> : "Login"}
//         </button>

//         {err.ok === false && <span className="error">{err.message}</span>}

//         {/* </form> */}
//       </form>
//     </div>
//   </div>
// );