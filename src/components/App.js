import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { uuid } from 'uuidv4';
import React, { useState, useEffect } from "react";
import * as ReactSemantic from 'semantic-ui-react';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

    const LOCAL_STORAGE_KEY = 'contacts';
    const [ contacts, setContacts ] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id: uuid(), name: contact.name, email: contact.email }]);
    }

    const removeContactHandler = (id) => {

        console.log('Remove a contact with ID = ', id);

        const updatedContactList = contacts.filter( (contact) => {
            return contact.id !== id;
        });

        setContacts(updatedContactList);
    }

    useEffect( () => {
        const retContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retContacts) {
            setContacts(retContacts);
        }
    }, [] );

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    }, [contacts] );


  return (
      <div>
          <Header/>
          <ReactSemantic.Container align='center'>
              <AddContact addContactHandler={ addContactHandler }/>
              <ContactList contacts={ contacts } getContactId={ removeContactHandler }/>
          </ReactSemantic.Container>
      </div>
  )
};

export default App;
