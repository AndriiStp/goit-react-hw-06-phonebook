// import { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const inStorageContacts = localStorage.getItem('contacts');
  //   return inStorageContacts ? JSON.parse(inStorageContacts) : [];
  // });

  // const [filter, setFilter] = useState('');

  // const deleteContact = id => {
  //   const updatedContacts = contacts.filter(contact => contact.id !== id);
  //   setContacts(updatedContacts);
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const visibleContact = () => {
  //   const filterLowerCase = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterLowerCase)
  //   );
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const contactsInStorage = localStorage.getItem('contacts');
  //   if (contactsInStorage) {
  //     setContacts(JSON.parse(contactsInStorage));
  //   }
  // }, []);

  return (
    <div>
      <h1 className={css.header}>PhoneBook</h1>
      <Form />
      <h2 className={css.header}>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
