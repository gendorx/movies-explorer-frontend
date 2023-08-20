import "./FilterCheckbox.css";

function FilterCheckbox({ isShortMovies, onChange }) {
  return (
    <div className="filter">
      <div className="filter__container">
        <label className="filter__label" htmlFor="filter-checkbox">
          <input
            type="checkbox"
            id="filter-checkbox"
            className="filter__checkbox"
            checked={isShortMovies}
            name="isShortMovies"
            onChange={onChange}
          />

          <span className="filter__text">Короткометражки</span>
        </label>
      </div>
    </div>
  );
}

export default FilterCheckbox;
