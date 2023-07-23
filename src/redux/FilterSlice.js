// FILTER INIT STATE + REDUCER
const filterInitState = { filter: '' };

export const filterReducer = (state = filterInitState, action) => {
  switch (action.type) {
    case 'filter/search':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const filterContact = filter => {
  return {
    type: 'filter/filterContact',
    payload: filter,
  };
};
