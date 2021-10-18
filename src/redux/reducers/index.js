import { combineReducers } from "redux";
import filters from "./filters";
import vacancies from "./vacancies";


const rootReducer = combineReducers({
	vacancies,
	filters
});

export default rootReducer;