import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filters, VacanciesBloc } from ".";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchVacancies } from "../redux/actions/vacancies";
import Pagination from "./Pagination";
import VacLoadingBlock from "./VacLoadingBlock";

const itemsCategory = [
  "Стройка",
  "Производство",
  "Сбор урожая",
  "Для женщин",
  "Для мужчин",
];

function Vacancies() {
  const dispatch = useDispatch();
  const { vacancies, isLoaded } = useSelector(({ vacancies }) => ({
    vacancies: vacancies.items,
    isLoaded: vacancies.isLoaded,
  }));
  const { category, sortBy } = useSelector(({ filters }) => ({
    category: filters.category,
    sortBy: filters.sortBy,
  }));
  //Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [vacanciesPerPage, setVacanciesPerPage] = React.useState(5);

  //get current vacancies
  const indexOfLastVacancies = currentPage * vacanciesPerPage;
  const indexOfFirstVacancies = indexOfLastVacancies - vacanciesPerPage;
  const currentVacancies = vacancies.slice(
    indexOfFirstVacancies,
    indexOfLastVacancies
  );

  React.useEffect(() => {
    dispatch(fetchVacancies(category, sortBy));
  }, [category, sortBy, currentPage, vacanciesPerPage]);

  //   React.useEffect(() => {
  //     fetch("http://localhost:3000/db.json")
  //       .then((resp) => resp.json())
  //       .then((resp) => setVacancies(resp.vacancies));
  //   }, []);

  const handleSetCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const handleSetSortBy = React.useCallback((index) => {
    dispatch(setSortBy(index));
  }, []);

  return (
    <section className="section" id="vacancies" name="vacancies">
      <div className="container">
        <div className="services">
          <Filters
            itemsCategory={itemsCategory}
            onClickCategory={handleSetCategory}
            activeCategory={category}
            sortBy={sortBy}
            setSortBy={handleSetSortBy}
          />
          <Pagination
            vacanciesPerPage={vacanciesPerPage}
            totalVacancies={vacancies.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setVacanciesPerPage={setVacanciesPerPage}
            clsName = 'pagination'
          />

          <h2 className="services__main-title">Вакансии</h2>

          {isLoaded
            ? currentVacancies.map((obj) => (
                <VacanciesBloc key={obj.id} {...obj} />
              ))
            : Array(6)
                .fill(0)
                .map((_, index) => <VacLoadingBlock key={index} />)}

          <Pagination
            vacanciesPerPage={vacanciesPerPage}
            totalVacancies={vacancies.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setVacanciesPerPage={setVacanciesPerPage}
            clsName = 'paginationDown'
          />
        </div>
      </div>
    </section>
  );
}

export default Vacancies;
