import "./SearchForm.css";

import searchIcon from "../../images/search-icon.svg";
import searchIconButton from "../../images/search-button-icon.svg";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";

const inputName = "query";

function SearchForm({
  onSubmit,
  isShortMovies,
  onChangeFilterCheckbox,
  onChangeInputQuery,
  query,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched", reValidateMode: "onChange" });

  return (
    <section className="search">
      <div className="search__container">
        <form
          id="movies-search"
          className="search__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="search__inputs">
            <label className="search__field" htmlFor="search-query">
              <img
                src={searchIcon}
                className="search__icon"
                alt="изображение лупы"
              />

              <div className="search__input-container">
                <input
                  type="text"
                  placeholder="Фильм"
                  className="search__input"
                  id="search-query"
                  {...register(inputName)}
                  value={query}
                  onChange={onChangeInputQuery}
                />

                <span className="search__input-error">
                  {errors[inputName]?.message}
                </span>
              </div>
            </label>

            <button className="search__submit" type="submit">
              <img
                src={searchIconButton}
                className="search__button-icon"
                alt="изображение лупы"
              />
            </button>
          </div>

          <FilterCheckbox
            isShortMovies={isShortMovies}
            onChange={onChangeFilterCheckbox}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
