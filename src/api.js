import axios from "axios";

export const apiGetVacancies = (category, sortBy, currentPage = 1, vacanciesPerPage = 6) => {
	return axios.get(`https://fotrunajob.herokuapp.com/api/vacancies?${category !== null ? `category=${category}&` : ''}_sort=${sortBy}&_order=desc`)
	.then(({data}) => {
		return data
	})
}
