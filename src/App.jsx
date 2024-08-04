import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;

//

// import  { useState } from 'react';
// import ContactList from './components/Contact/ContactList';
// import './App.css';
// import SearchBox from './components/SearchBox/SearchBox';
// import ContactForm from './components/ContactForm/ContactForm';
// import { nanoid } from 'nanoid';
// function App() {
//   // Стан для контактів
//   const [contacts, setContacts] = useState([
//     { id: nanoid(), name: 'John Doe', number: '123-456-7890' },
//     { id: nanoid(), name: 'John Doe', number: '123-456-7890' },
//     { id: nanoid(), name: 'Jane Smith', number: '987-654-3210' },
//     { id: nanoid(), name: 'Jim Brown', number: '555-555-5555' },
//   ]);

//   // Функція для фільтрації контактів за пошуковим запитом
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   // Функція для додавання нового контакту
//   const handleAddContact = (newContact) => {
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   // Стан для пошукового запиту
//   const [searchTerm, setSearchTerm] = useState('');

//   // Фільтрація контактів за пошуковим запитом
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Phonebook</h1>

//       <ContactForm onAddContact={handleAddContact} />
//       <SearchBox searchTerm={searchTerm} onSearch={handleSearch} />
//       <ContactList contacts={filteredContacts} />
//     </div>
//   );
// }

// export default App;
