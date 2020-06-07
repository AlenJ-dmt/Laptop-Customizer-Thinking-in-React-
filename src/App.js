import React, { Component } from 'react';
import MainForm from './MainForm/MainForm'
import MainSummary from './MainSummary/MainSummary'
import './App.css';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render() {
    const total = Object.keys(this.state.selected).reduce( (acc, curr) => acc + this.state.selected[curr].cost, 0) 

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <MainForm 
            USCurrencyFormat={this.USCurrencyFormat} 
            features={this.props.features} 
            selected={this.state.selected}
            updateFeature={this.updateFeature}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <MainSummary
            selected={this.state.selected}
            USCurrencyFormat={this.USCurrencyFormat} 
            total={total}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
