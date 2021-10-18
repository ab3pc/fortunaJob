import React from "react";
import { SortPopUp } from ".";
import PropTypes from "prop-types"; 
import classNames from "classnames";

const items = [
  { name: "Оплате", type: "salary" },
  { name: "Популярности", type: "rating" },
  { name: "Дате добавления", type: "addDate" },
];

const Filters = React.memo(function Filters({
  activeCategory,
  itemsCategory,
  onClickCategory,
  sortBy,
  setSortBy
}) {
  const onSelectActiveCategory = (index) => {
    onClickCategory(index);
  };
  const sortByCategoryRef = React.useRef();

  const [visibleCategory, setVisibleCategory] = React.useState(false);
  const handleVisibleCat = () => {
    setVisibleCategory(!visibleCategory)
  console.log(visibleCategory);
  }

  const outSideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortByCategoryRef.current)) {
      setVisibleCategory(false);
    }
  };
  
  React.useEffect(() => {
    document.body.addEventListener("click", outSideClick);
  }, []);

  return (
    <div className="sort">
      <div className="sort__inner">
        <div ref = {sortByCategoryRef} className={classNames('sortByCategory', {show: visibleCategory})} onClick={handleVisibleCat }>
          <span
            className={activeCategory === null ? "active" : ""}
            onClick={() => onSelectActiveCategory(null)}
          >
            Все
          </span>

          {itemsCategory &&
            itemsCategory.map((item, index) => (
              <span
                className={activeCategory === index ? "active" : ""}
                onClick={() => onSelectActiveCategory(index)}
                key={`${item}_${index}`}
              >
                {item}
              </span>
            ))}
        </div>

        <SortPopUp activeItem = {sortBy} items={items} setSortBy = {setSortBy} />
      </div>
    </div>
  );
});

Filters.propTypes = {
  activeCategory: PropTypes.number,
  itemsCategory: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func

};

Filters.defaultProps = {
  activeCategory: null,
  itemsCategory: [],
 
};
export default Filters;
