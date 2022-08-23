import React from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import InputCheckForm from './InputCheckForm';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <InputForm
          name="name"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
          id="name-input"
          teste={ hasTrunfo }
        />
        <InputForm
          name="description"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
          id="description-input"
        />
        <InputForm
          name="attr1"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
          id="attr1-input"
        />
        <InputForm
          name="attr2"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
          id="attr2-input"
        />
        <InputForm
          name="attr3"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          id="attr3-input"
        />
        <InputForm
          name="image"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
          id="image-input"
        />
        <SelectForm
          name="select"
          onChange={ onInputChange }
          value={ cardRare }
          id="rare-input"
        />
        <InputCheckForm
          name="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          value=""
          onChange={ onInputChange }
          id="trunfo-input"
        />
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
