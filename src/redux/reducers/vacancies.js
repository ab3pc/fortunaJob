const initialState = {
  items: [],
  isLoaded: false
};

const vacancies = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VACANCIES':
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };
    case 'SET_LOADED':
      return {
        ...state,
         isLoaded: action.payload
      };

    default:
      return state;
  }
};

export default vacancies;
