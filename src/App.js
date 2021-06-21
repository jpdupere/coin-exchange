import './App.css';
import logo from './logo.svg'
import Coin from './components/Coin/Coin'
import AccountBalance from './components/AccountBalance/AccountBalance'
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 10000,
      coinData: [
        { name: 'Bitcoin', ticker: 'BTC', price: 31000.00 },
        { name: 'Ethereum', ticker: 'ETH', price: 3000.00 },
        { name: 'Tether', ticker: 'USDT', price: 1.00 },
        { name: 'Binance', ticker: 'BNB', price: 300.00 },
      ]
    }
  }
  render() {
    const coinData = this.state.coinData.map(coin => <Coin key={coin.name + coin.ticker} {...coin} />)

    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
          <h1 className="App-title">Coin Exchange</h1>
        </header>
        <AccountBalance amount={this.state.balance} />
        <table className="coin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {coinData}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
