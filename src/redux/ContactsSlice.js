// CONTACTS INIT STATE + REDUCER
const contactsInitState = { contacts: [] };

export const contactsReducer = (state = contactsInitState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contact/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact !== action.payload),
      };
    default:
      return state;
  }
};

export const addContact = value => {
  return {
    type: 'contact/addContact',
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: 'contact/deleteContact',
    payload: value,
  };
};
