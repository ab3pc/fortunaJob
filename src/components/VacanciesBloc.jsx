import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types"; 
import { ModalForVacancies } from ".";
import { Link } from "react-router-dom";

function VacanciesBloc({
  name,
  addDate,
  imageUrl,
  salary,
  workPlace,
  workHours,
  age,
  genders,
}) {
const typesOfGender = ["Женщины","Мужчины"];

const [modalForVacancies, setModalForVacancies] = React.useState(false);

  return (
    <> 
    <div className="service__item">
      <h4 className="services__title">{name}</h4>
      <img src={imageUrl} alt="" />
      <div className="services__text">
        <p>
          <span>Для кого: {age} лет.</span>
        </p>
        <p>
			
          {typesOfGender.map((genderItem, index) => (
			
            <span
              className={classNames("gender", {
                disabled:!genders.includes(index),
              })}
              key={`${index}_${genderItem}`}
            >
              {genderItem}
            </span>
			
          ))}
        </p>
        <p>
          <span>Место работы:</span> {workPlace}
        </p>
        <p>
          <span>Оплата:</span> {salary} zlt
        </p>
        <p>
          <span>График:</span> {workHours} часов
        </p>
        <p>
          <span>Дата добавления:</span> {addDate}
        </p>
      </div>

      <div className="services__footer">
        <Link to='#' className="services__link" onClick = {() => setModalForVacancies(true)}>
          Узнать больше
        </Link>
     </div>
      </div>
         {modalForVacancies && <ModalForVacancies setModalForVacancies = {setModalForVacancies} name = {name} workPlace = {workPlace} salary = {salary} />}
    </>
    
  );
}
VacanciesBloc.propTypes = {
		name: PropTypes.string,
		imageUrl:PropTypes.string,
		salary:PropTypes.string,
		workPlace:PropTypes.string,
		workHours:PropTypes.string,
		age:PropTypes.string,
		genders:PropTypes.arrayOf(PropTypes.number),

   
  };
  
  VacanciesBloc.defaultProps = {
	name:'',
	imageUrl:'',
	salary:'',
	workPlace:'',
	workHours:'',
	age:'',
	genders:[],
  
  }
export default VacanciesBloc;
