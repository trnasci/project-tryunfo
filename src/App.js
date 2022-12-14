import React from 'react';
import Card from './components/Card';
import CardSave from './components/CardSave';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  onInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const { cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;
      const soma = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
      const maxSelfValue = 90;
      const maxValue = 210;
      if (cardName && cardDescription && cardImage && cardRare && soma <= maxValue
            && Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxSelfValue
            && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxSelfValue
            && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxSelfValue) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  onSaveButtonClick = (objInfo) => {
    const { cardTrunfo } = this.state;
    this.setState((state) => ({
      data: [...state.data, objInfo],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: cardTrunfo,
      isSaveButtonDisabled: true,
    }));
  };

  onDeleteButton = (event) => {
    const { target } = event;
    const { name } = target;
    const { data } = this.state;
    const filterData = data.filter((ele) => ele.cardName !== name);
    this.setState({ data: filterData }, () => {
      const ver = filterData.some((ele) => ele.cardTrunfo === true);
      this.setState({ hasTrunfo: ver });
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      data,
    } = this.state;
    return (
      <main>
        <h1>Tryunfoo</h1>
        <section>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        { data.map((element) => (
          <CardSave
            cardName={ element.cardName }
            cardDescription={ element.cardDescription }
            cardAttr1={ element.cardAttr1 }
            cardAttr2={ element.cardAttr2 }
            cardAttr3={ element.cardAttr3 }
            cardImage={ element.cardImage }
            cardRare={ element.cardRare }
            cardTrunfo={ element.cardTrunfo }
            key={ element.cardName }
            onDeleteButton={ this.onDeleteButton }
          />))}
      </main>
    );
  }
}

export default App;
