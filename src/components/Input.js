import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { name, type, value, onChange, id } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input
          name={ name }
          type={ type }
          value={ value }
          onChange={ onChange }
          id={ id }
          data-testid={ id }
        />
      </label>
    );
  }
}
InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InputForm;
