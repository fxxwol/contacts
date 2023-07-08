import React from 'react';
import PropTypes from 'prop-types';
import { Input, InputLabel } from '@mui/material';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <InputLabel htmlFor="filter">Find contacts by name</InputLabel>
      <Input
        type="text"
        id="filter"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

export default Filter;
