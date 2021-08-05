import React, { Component } from 'react';
import * as ReactSemantic from 'semantic-ui-react';

class AddContact extends Component {

    state = {
        name: '',
        email: ''
    };

    add = (e) => {
        e.preventDefault();

        if(this.state.name === '' || this.state.email === '') {
            alert('All the fields are mandatory!');
            return;
        }

        console.log("Current state: ", this.state);

        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
    }

    render() {
        return (
            <ReactSemantic.Grid columns='equal'>
                <ReactSemantic.GridRow column={3}>
                    <ReactSemantic.GridColumn></ReactSemantic.GridColumn>
                    <ReactSemantic.GridColumn>
                        <ReactSemantic.Segment inverted color='olive' align='center'>
                                <h2>Add contact</h2>
                                <ReactSemantic.Divider/>
                                <ReactSemantic.Form onSubmit={ this.add }>
                                    <ReactSemantic.Form.Field>
                                        <label>Name</label>
                                        <input type={ "text" } name={ "name" } placeholder={ "Contact name" }
                                               value={ this.state.name }
                                               onChange={ (e) => this.setState({ name: e.target.value })}/>
                                    </ReactSemantic.Form.Field>
                                    <ReactSemantic.Form.Field>
                                        <label>Email</label>
                                        <input type={ "text" } name={ "email" } placeholder={ "Email" }
                                               value={ this.state.email }
                                               onChange={ (e) => this.setState({ email: e.target.value })}/>
                                    </ReactSemantic.Form.Field>
                                    <ReactSemantic.Button type={ "submit" } color='teal'>Submit</ReactSemantic.Button>
                                </ReactSemantic.Form>
                        </ReactSemantic.Segment>
                    </ReactSemantic.GridColumn>
                    <ReactSemantic.GridColumn></ReactSemantic.GridColumn>
                </ReactSemantic.GridRow>
            </ReactSemantic.Grid>
        )
    }
}

export default AddContact;