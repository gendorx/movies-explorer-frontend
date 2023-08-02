import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <div className="filter__container">
        <label className="filter__label" htmlFor="filter-checkbox">
          <input
            type="checkbox"
            id="filter-checkbox"
            className="filter__checkbox"
          />

          <span className="filter__text">Короткометражки</span>
        </label>
      </div>
    </div>
  );
}

export default FilterCheckbox;
