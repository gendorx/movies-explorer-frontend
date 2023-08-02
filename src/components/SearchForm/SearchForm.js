import "./SearchForm.css";

import searchIcon from "../../images/search-icon.svg";
import searchIconButton from "../../images/search-button-icon.svg";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form id="movies-search" className="search__form">
          <div className="search__inputs">
            <label className="search__field" htmlFor="search-query">
              <img
                src={searchIcon}
                className="search__icon"
                alt="изображение лупы"
              />

              <input
                type="text"
                placeholder="Фильм"
                name="query"
                className="search__input"
                id="search-query"
              />
            </label>

            <button className="search__submit" type="submit">
              <img
                src={searchIconButton}
                className="search__button-icon"
                alt="изображение лупы"
              />
            </button>
          </div>

          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
