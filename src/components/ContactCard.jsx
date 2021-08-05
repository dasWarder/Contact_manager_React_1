import React from "react";
import * as ReactSemantic from 'semantic-ui-react';
import user from '../images/user-img.png';

const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
        <ReactSemantic.List.Item>
            <ReactSemantic.Image avatar src={ user } floated='left' alt='user' size='mini'/>
            <ReactSemantic.List.Content floated='right'>
                <ReactSemantic.Icon onClick={ () => props.clickHandler(id) } name='trash' size='large' style={{ color: "red", marginTop: "7px" }}/>
            </ReactSemantic.List.Content>

            <ReactSemantic.List.Content floated='left'>
                <ReactSemantic.List.Header>{ name }</ReactSemantic.List.Header>
                <ReactSemantic.List.Description>{ email }</ReactSemantic.List.Description>
            </ReactSemantic.List.Content>
        </ReactSemantic.List.Item>
    )
}

export default ContactCard;