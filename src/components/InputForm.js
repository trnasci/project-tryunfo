import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { name, type, value, onChange, id, labelName } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
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
  labelName: PropTypes.string.isRequired,
};

export default InputForm;
