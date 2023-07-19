// CONTACTS INIT STATE + REDUCER
const contactsInitState = { contacts: [] };

export const contactsReduser = (state = contactsInitState, action) => {
  switch (action.type) {
    case 'contact/add':
      return {
        ...state,
        contacts: state.contacts + action.payload,
      };

    case 'contact/delete':
      return {
        ...state,
        contacts: state.contacts - action.payload,
      };
    default:
      return state;
  }
};

export const addContact = value => {
  return {
    type: 'contacts/add',
    payload: value,
  };
};

export const deleteContact = value => {
  return {
    type: 'contacts/delete',
    payload: value,
  };
};
