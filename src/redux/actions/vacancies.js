import { apiGetVacancies } from "../../api";


export const fetchVacancies = (category, sortBy, currentPage, vacanciesPerPage) => (dispatch) => {
dispatch(setLoaded());
apiGetVacancies(category, sortBy, currentPage, vacanciesPerPage).then((resp) => dispatch(setVacancies(resp)) )
}

export const setVacancies = (items) => ({
	type: 'SET_VACANCIES',
	payload: items
});

export const setLoaded = () => ({
	type: 'SET_LOADED',
	payload: false
});

