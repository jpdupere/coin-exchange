import AccountBalance from './components/AccountBalance/AccountBalance'
import React, { Component } from 'react';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Div = styled.div `
    text-align: center;
    background-color: rgb(20, 60, 100);
    color: #cccccc;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      balance: 10000,
      showBalance: true,
      coinData: [
        { name: 'Bitcoin', ticker: 'BTC', price: 31000.00, balance: 0.54 },
        { name: 'Ethereum', ticker: 'ETH', price: 3000.00, balance: 4 },
        { name: 'Tether', ticker: 'USDT', price: 1.00, balance: 0 },
        { name: 'Binance', ticker: 'BNB', price: 300.00, balance: 8 },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggleShowBalance = this.handleToggleShowBalance.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    const coinData = this.state.coinData.map(({name, ticker, price, balance}) => {
      let newPrice = price;
      if (ticker === valueChangeTicker) {
        const randomPct = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPct;
      }
      return { ticker, name, price: newPrice, balance }
    })
    this.setState({ coinData });
  }
  handleToggleShowBalance() {
    this.setState({ showBalance: !this.state.showBalance })
  }
  render() {
    return (
      <Div>
        <Header />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleToggleShowBalance={this.handleToggleShowBalance} 
          />
        <CoinList 
          coinData={this.state.coinData}
          showBalance={this.state.showBalance} 
          handleRefresh={this.handleRefresh} 
          />
      </Div>
    );
  }
}

export default App;
