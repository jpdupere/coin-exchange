import AccountBalance from './components/AccountBalance/AccountBalance'
import React, { Component } from 'react';
import axios from 'axios';
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
      coinData: [],
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggleShowBalance = this.handleToggleShowBalance.bind(this);
  }
  async componentDidMount() {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, 10   ).map((coin) => coin.id);
    const promises = coinIds.map((coinId) => axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(response => {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(coin.quotes.USD.price),
      }
    })
    this.setState({ coinData: coinPriceData });
  }
  handleRefresh = async (coinId) => {
    const response = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`);
    const coinPrice = parseFloat(response.data.quotes.USD.price);
    const coinData = this.state.coinData.map(({key, name, ticker, price, balance}) => {
      let newPrice = price;
      if (coinId === key) {
        newPrice = coinPrice;
      }
      return { key, ticker, name, price: newPrice, balance }
    });
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
