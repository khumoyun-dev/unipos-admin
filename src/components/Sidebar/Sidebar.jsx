import "./Sidebar.scss";
import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Svgs/Logo";

import DashboardIcon from "../../assets/Svgs/DashboardIcon";
import HomeIcon from "../../assets/Svgs/HomeIcon";
import BoxIcon from "../../assets/Svgs/BoxIcon";
import PersonIcon from "../../assets/Svgs/PersonIcon";
import NoteIcon from "../../assets/Svgs/NoteIcon";
import BasketIcon from "../../assets/Svgs/BasketIcon";
import ReloadIcon from "../../assets/Svgs/ReloadIcon";
import SettingsIcon from "../../assets/Svgs/SettingsIcon";
import DownArrow from "../../assets/Svgs/DownArrow";
import UpArrow from "../../assets/Svgs/Arrow.js";

function Sidebar() {
  const [isActiveStore, setActiveStore] = useState(false);
  const [isActiveProducts, setActiveProducts] = useState(false);
  const [isActiveStat, setActiveStat] = useState(false);
  const drpdwnRef = useRef(null);

  return (
    <div className="sidebar">
      <nav className="sidebar__nav">
        <div className="sidebar__logo">
          <Link className="logo__link" to="/">
            <Logo />
          </Link>
        </div>

        <ul className="sidebar__list">
          <li className="sidebar__item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/"
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li className="sidebar__item" id="drpdwn1">
            <NavLink
              onClick={() => setActiveStore((prev) => !prev)}
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/store"
            >
              <HomeIcon />
              <span>Do'kon</span>
              {isActiveStore ? (
                <UpArrow className="arrow arrow-up" />
              ) : (
                <UpArrow className="arrow" />
              )}
            </NavLink>
            <ul
              ref={drpdwnRef}
              className={!isActiveStore ? "hidden" : "dropdown__list"}
            >
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/store/my"
                >
                  <span>Mening do'konim</span>
                </NavLink>
              </li>
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/store/branches"
                >
                  <span>Filiallar</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="sidebar__item" id="drpdwn2">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/products"
              onClick={() => setActiveProducts((prev) => !prev)}
            >
              <BoxIcon />
              <span>Mahsulotlar</span>
              {isActiveProducts ? (
                <UpArrow className="arrow arrow-up" />
              ) : (
                <UpArrow className="arrow" />
              )}
            </NavLink>
            <ul
              ref={drpdwnRef}
              className={
                !isActiveProducts ? "hidden" : "dropdown__list"
              }
            >
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/products/all"
                >
                  <span>Barcha mahsulotlar</span>
                </NavLink>
              </li>
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/products/sync"
                >
                  <span>Sinxronizatsiya</span>
                </NavLink>
              </li>
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/products/archive"
                >
                  <span>Arxivlanganlar</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="sidebar__item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/users"
            >
              <PersonIcon />
              <span>Foydalanuvchilar</span>
            </NavLink>
          </li>

          <li className="sidebar__item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/cash"
            >
              <NoteIcon />
              <span>Kassa</span>
            </NavLink>
          </li>

          <li className="sidebar__item" id="drpdwn3">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/statistics"
              onClick={() => setActiveStat((prev) => !prev)}
            >
              <BasketIcon />
              <span>Hisobotlar bo'limi</span>
              {isActiveStat ? (
                <UpArrow className="arrow arrow-up" />
              ) : (
                <UpArrow className="arrow" />
              )}
            </NavLink>
            <ul
              ref={drpdwnRef}
              className={!isActiveStat ? "hidden" : "dropdown__list"}
            >
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/statistics/all"
                >
                  <span>Hisobotlar</span>
                </NavLink>
              </li>
              <li className="dropdown__item">
                <NavLink
                  className={(navData) =>
                    navData.isActive
                      ? "dropdown__link dropdown__link--active"
                      : "dropdown__link"
                  }
                  end
                  to="/statistics/invoices"
                >
                  <span>Cheklar</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="sidebar__item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/history"
            >
              <ReloadIcon />
              <span>History</span>
            </NavLink>
          </li>

          <li className="sidebar__item">
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? "sidebar__link sidebar__link--active"
                  : "sidebar__link"
              }
              end
              to="/settings"
            >
              <SettingsIcon />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>

        <div className="sidebar__store">
          <div className="sidebar__store__img"></div>
          <div className="sidebar__store__details">
            <div className="sidebar__store__title">
              <span>Texnomart</span> do'koni
            </div>
            <div className="sidebar__store__category">
              maishiy texnika va elektr...
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
