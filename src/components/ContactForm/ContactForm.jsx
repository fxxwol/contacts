import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, SubmitBtn } from './ContactForm.styled';
import { FormControl, Input, InputLabel } from '@mui/material';

export default class ContactForm extends Component {
    static propTypes = {
      onSubmit: PropTypes.func,
    };

  state = {
    name: '',
    number: '',
  };

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name">
            Name
          </InputLabel>
          <Input size="small"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInput}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="number">Number</InputLabel>
          <Input
            id="number"
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInput}
          />
        </FormControl>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}
