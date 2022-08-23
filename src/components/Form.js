import React from 'react';
import InputForm from './Input';
import SelectForm from './SelectForm';

class Form extends React.Component {
  render() {
    return (
      <form>
        <InputForm
          name="name"
          type="text"
          value=""
          onChange=""
          id="name-input"
        />
        <InputForm
          name="description"
          type="textarea"
          value=""
          onChange=""
          id="description-input"
        />
        <InputForm
          name="attr1"
          type="number"
          value=""
          onChange=""
          id="attr1-input"
        />
        <InputForm
          name="attr2"
          type="number"
          value=""
          onChange=""
          id="attr2-input"
        />
        <InputForm
          name="attr3"
          type="number"
          value=""
          onChange=""
          id="attr3-input"
        />
        <InputForm
          name="image"
          type="text"
          value=""
          onChange=""
          id="image-input"
        />
        <SelectForm
          name="image"
          onChange=""
          id="rare-input"
        />
        <InputForm
          name="trunfo-input"
          type="checkbox"
          value=""
          onChange=""
          id="trunfo-input"
        />
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
