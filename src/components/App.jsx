import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './Contacts/ContactList';
import { Container } from '@mui/material';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = ({ name, number }) => {
    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in your contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() { 
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) { 
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) { 
    if (prevState.contacts !== this.state.contacts) { 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
