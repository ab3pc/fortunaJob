import React from "react";

const numVacanciesOnPage = [5, 10, 15, 20];

function Pagination({
  vacanciesPerPage,
  totalVacancies,
  currentPage,
  setCurrentPage,
  setVacanciesPerPage,
  clsName
}) {
  const pageNum = [];
  for (let i = 1; i <= Math.ceil(totalVacancies / vacanciesPerPage); i++) {
    pageNum.push(i);
  }

  const handleChange = (event) => {
	setCurrentPage(1);
	setVacanciesPerPage(event.target.value);
	  };
	  



  return (
    <div className={clsName}>
      <div className="pagination__num">
        {pageNum.map((num) => (
          <span
            onClick={() => setCurrentPage(num)}
            key={num}
            className={currentPage === num ? "active" : ""}
          >
            {num}
          </span>
        ))}
      </div>
      <div className="pagination__numonpage">
        {/* <select>
             {numVacanciesOnPage.map(number => (
				<option value={number} onClick={(e) => console.log(e)} onChange={(e) => { console.log(e) }}>{number}</option>
			))}
          </select> */}
        <form>
          <label>
            Отображать по: </label>
            <select className="select" value={vacanciesPerPage} onChange={handleChange}>
              {numVacanciesOnPage.map((number) => (
                <option key = {number} value={number}>{number}</option>
              ))}
            </select>
      
        </form>
      </div>
    </div>
  );
}

export default Pagination;
