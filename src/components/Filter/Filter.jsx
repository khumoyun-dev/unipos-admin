import "./Filter.scss";
import React, { useState } from "react";
import SearchInput from "../Search/SearchInput";
import phone from "../../assets/icons/mobile-phone.svg";
import Arrow from "../../assets/Svgs/Arrow";
import BackArrow from "../../assets/Svgs/BackArrow";

const Filter = () => {
  const [isFiltering, setIsFiltering] = useState(false);

  return (
    <div className="filter-by">
      <button
        className={`filter-by__select${
          isFiltering ? " filter-by__select--up" : ""
        }`}
        onClick={() => setIsFiltering(!isFiltering)}
      >
        <span className="filter-by__select-text">Kategoriya</span>
        <Arrow className="filter-by__select-arrow" />
      </button>
      <div
        className={`filter-by__options${
          isFiltering ? " filter-by__options--open" : ""
        }`}
      >
        <SearchInput
          className="filter-by__options-search"
          handleSearch={(evt) => evt}
        />
        <div className="filter-by__options-list">
          <button className="filter-by__options-list-item">
            <img
              className="filter-by__options-list-item-icon"
              width={28}
              height={28}
              src={phone}
              alt="img"
            />
            <span className="filter-by__options-list-item-text">
              Maishiy texnika
            </span>
            <Arrow className="filter-by__options-list-item-arrow" />
            <div className="filter-by__options-list-item-inner">
              <div className="filter-by__options-list-item-inner-header">
                <BackArrow />
                <span>Maishiy texnika</span>
              </div>
              <div className="filter-by__options-list filter-by__options-list--inner">
                <button className="filter-by__options-list-item">
                  <img
                    className="filter-by__options-list-item-icon"
                    width={28}
                    height={28}
                    src={phone}
                    alt="img"
                  />
                  <span className="filter-by__options-list-item-text">
                    Maishiy texnika
                  </span>
                  <Arrow className="filter-by__options-list-item-arrow" />
                </button>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
