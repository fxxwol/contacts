import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { List, Item} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id} disableGutters>
          <ContactItem contactItem={contact} onDelete={onDelete} />
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default ContactList;
