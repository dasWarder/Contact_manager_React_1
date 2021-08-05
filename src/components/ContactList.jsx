import React from "react";
import * as ReactSemantic from 'semantic-ui-react';
import ContactCard from "./ContactCard";


const ContactList = (props) => {


    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard key={ contact.id } contact={ contact } clickHandler={ deleteContactHandler } />
        )
    })

    return (
        <ReactSemantic.Segment align='center'>
            <h3>Contact List</h3>
            <ReactSemantic.List divided verticalAlign='middle'>
                { renderContactList }
            </ReactSemantic.List>
        </ReactSemantic.Segment>
    )
}

export default ContactList;