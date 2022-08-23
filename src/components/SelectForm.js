import React from 'react';
import PropTypes from 'prop-types';

class SelectForm extends React.Component {
  render() {
    const { name, onChange, id, value } = this.props;
    return (
      <select
        name={ name }
        onChange={ onChange }
        value={ value }
        id={ id }
        data-testid={ id }
      >
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito raro</option>
      </select>
    );
  }
}
SelectForm.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectForm;
