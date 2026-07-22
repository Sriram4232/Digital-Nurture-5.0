import React from 'react';

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    if (currency.toLowerCase() === 'euro') {
      alert("Converting to Euro Amount is " + (Number(amount) * 80));
    } else {
      alert("Conversion only supported for Euro (multiplying by 80)");
    }
  }

  render() {
    return (
      <div style={{ marginTop: '20px' }}>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount: </label>
            <input 
              type="text" 
              value={this.state.amount} 
              onChange={(e) => this.setState({ amount: e.target.value })} 
            />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Currency: </label>
            <input 
              type="text" 
              value={this.state.currency} 
              onChange={(e) => this.setState({ currency: e.target.value })} 
            />
          </div>
          <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  incrementCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  sayHello = () => {
    alert("Hello! Member1");
  }

  handleIncrementClick = () => {
    this.incrementCounter();
    this.sayHello();
  }

  handleDecrementClick = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  sayWelcome = (msg) => {
    alert(msg);
  }

  handleSyntheticEvent = (e) => {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>{this.state.counter}</h1>
        
        <div>
          <button onClick={this.handleIncrementClick}>Increment</button>
        </div>
        <div style={{ marginTop: '5px' }}>
          <button onClick={this.handleDecrementClick}>Decrement</button>
        </div>
        <div style={{ marginTop: '5px' }}>
          <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        </div>
        <div style={{ marginTop: '5px' }}>
          <button onClick={this.handleSyntheticEvent}>Click on me</button>
        </div>
        
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
