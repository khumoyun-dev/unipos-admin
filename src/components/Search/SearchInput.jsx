import "./SearchInput.scss";
import SearchIcon from "../../assets/icons/search.svg";

const SearchInput = ({ handleSearch, className = "" }) => {
  return (
    <input
      className={`search-input${className.length > 0 ? ` ${className}` : ""}`}
      type="input"
      placeholder="Qidirish"
      style={{ backgroundImage: "url(" + SearchIcon + ")" }}
      onInput={handleSearch}
    ></input>
  );
};

export default SearchInput;
