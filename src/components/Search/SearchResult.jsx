import "./SearchResult.scss";
import IphoneImg from "../../assets/images/iphone.jpg";
import { Link } from "react-router-dom";

const SearchResult = ({ data = [], isOpen = false }) => {
  return data.length > 0 && isOpen ? (
    <ul className={`search-result${isOpen ? " search-result--show" : ""}`}>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
      <li className="search-result__item">
        <Link className="search-result__item-link" to={"/product"}>
          <span
            className="search-result__item-link-img"
            style={{ backgroundImage: "url(" + IphoneImg + ")" }}
          ></span>
          <div className="search-result__item-link-content">
            <span className="search-result__item-link-content-name">
              Iphone 13 pro max 128GB grey
            </span>
            <div className="search-result__item-link-content-price">
              <span className="search-result__item-link-content-price-value">
                1 235 250.00
              </span>
              <span className="search-result__item-link-content-price-currency">
                UZS
              </span>
            </div>
          </div>
        </Link>
      </li>
    </ul>
  ) : (
    <span
      className={`search-result search-result--not-found${
        isOpen ? " search-result--show" : ""
      }`}
    >
      No items found
    </span>
  );
};

export default SearchResult;
