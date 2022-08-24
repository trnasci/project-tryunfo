import React from 'react';
import PropTypes from 'prop-types';

class InputCheckForm extends React.Component {
  render() {
    const { name, type, onChange, id, checked, labelName } = this.props;
    return (
      <label htmlFor={ name }>
        { labelName }
        <input
          name={ name }
          type={ type }
          value={ checked }
          onChange={ onChange }
          id={ id }
          data-testid={ id }
          checked={ checked }
        />
      </label>
    );
  }
}
InputCheckForm.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default InputCheckForm;
