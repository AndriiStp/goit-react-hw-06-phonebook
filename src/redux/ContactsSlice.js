import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    deleteContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
