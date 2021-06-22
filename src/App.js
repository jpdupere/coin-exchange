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
      coinData: [
        { name: 'Bitcoin', ticker: 'BTC', price: 31000.00 },
        { name: 'Ethereum', ticker: 'ETH', price: 3000.00 },
        { name: 'Tether', ticker: 'USDT', price: 1.00 },
        { name: 'Binance', ticker: 'BNB', price: 300.00 },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleRefresh(valueChangeTicker) {
    const coinData = this.state.coinData.map(({name, ticker, price}) => {
      let newPrice = price;
      if (ticker === valueChangeTicker) {
        const randomPct = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPct;
      }
      return { ticker, name, price: newPrice }
    })
    this.setState({ coinData });
  }
  render() {
    return (
      <Div>
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} />
      </Div>
    );
  }
}

export default App;
