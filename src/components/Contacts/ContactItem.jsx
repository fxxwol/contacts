import React from 'react';
import PropTypes from 'prop-types';
import { Text, DeleteBtn } from './ContactItem.styled';

const ContactItem = ({ contactItem: { id, name, number }, onDelete }) => {
  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
