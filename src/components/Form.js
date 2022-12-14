import React from 'react';
import PropTypes from 'prop-types';
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import InputCheckForm from './InputCheckForm';
import './Form.css';

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
    function checkTrunfo() {
      if (hasTrunfo === false) {
        return (<InputCheckForm
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
          value={ cardTrunfo }
          onChange={ onInputChange }
          id="trunfo-input"
          labelName="Super Trunfo"
        />);
      }
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }

    return (
      <form className="form">
        <InputForm
          name="cardName"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
          id="name-input"
          labelName="Nome"
        />
        <InputForm
          name="cardDescription"
          type="textarea"
          value={ cardDescription }
          onChange={ onInputChange }
          id="description-input"
          labelName="Descrição"
        />
        <InputForm
          name="cardAttr1"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
          id="attr1-input"
          labelName="Atributo 1"
        />
        <InputForm
          name="cardAttr2"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
          id="attr2-input"
          labelName="Atributo 2"
        />
        <InputForm
          name="cardAttr3"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
          id="attr3-input"
          labelName="Atributo 3"
        />
        <InputForm
          name="cardImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
          id="image-input"
          labelName="Imagem"
        />
        <SelectForm
          name="cardRare"
          onChange={ onInputChange }
          value={ cardRare }
          id="rare-input"
        />
        { checkTrunfo() }
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ () => onSaveButtonClick({
            cardName,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardImage,
            cardRare,
            cardTrunfo,
          }) }
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
