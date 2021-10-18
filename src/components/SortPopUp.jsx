import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"; 
import { CSSTransition } from 'react-transition-group';
const SortPopUp = React.memo(function SortPopUp({
  items,
  activeItem,
  setSortBy,
}) {
  const onSetactiveItem = (type) => {
    setSortBy(type);
    setvisiblePopUp(false);
  };

  const activeLabel = items.find((obj) => obj.type === activeItem).name;

  const [visiblePopUp, setvisiblePopUp] = React.useState(false);

  const toggleVisiblePopUp = () => {
    setvisiblePopUp(!visiblePopUp);
  };

  const sortPopUpRef = React.useRef();

  const outSideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortPopUpRef.current)) {
      setvisiblePopUp(false);
    }
  };
  
  React.useEffect(() => {
    document.body.addEventListener("click", outSideClick);
  }, []);

  return (
    <div
      className={classNames("sortPopUp", { rotated: visiblePopUp })}
      ref={sortPopUpRef}
    >
      <b>Сортировать по:</b>
      <span onClick={toggleVisiblePopUp}>{activeLabel}</span>




      <CSSTransition
          in={visiblePopUp}
          timeout={300}
          classNames="dialog"
          unmountOnExit
        >
           
        <div className="sort__pop__up">
          <ul>
            {items.map((obj, index) => (
              <li
                onClick={() => onSetactiveItem(obj.type)}
                className={activeItem === index ? "active" : ""}
                key={`${index}_${obj.type}`}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      
        </CSSTransition>





     


    </div>
  );
});
SortPopUp.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  activeItem: PropTypes.string,
  setSortBy: PropTypes.func
 
};

SortPopUp.defaultProps = {
  items: [],
  activeItem: 'rating',
 
};
export default SortPopUp;
