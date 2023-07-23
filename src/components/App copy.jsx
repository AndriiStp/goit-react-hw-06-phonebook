import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const currentContacts = useSelector(state => state.contacts);

  const [contacts, setContacts] = useState(() => {
    const inStorageContacts = localStorage.getItem('contacts');
    return inStorageContacts ? JSON.parse(inStorageContacts) : [];
  });

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact "${name}" is already exist!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const visibleContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const contactsInStorage = localStorage.getItem('contacts');
    if (contactsInStorage) {
      setContacts(JSON.parse(contactsInStorage));
    }
  }, []);

  return (
    <div>
      <h1 className={css.header}>PhoneBook</h1>
      <Form onSubmitProp={addContact} />
      <h2 className={css.header}>Contacts:</h2>
      <Filter value={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={visibleContact()} onDelete={deleteContact} />
    </div>
  );
};

export default App;
