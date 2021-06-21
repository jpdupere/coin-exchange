import './App.css';
import logo from './logo.svg'
import Coin from './components/Coin/Coin'
import AccountBalance from './components/AccountBalance/AccountBalance'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="React logo" />
        <h1 className="App-title">Coin Exchange</h1>
      </header>
      <AccountBalance amount={10000} />
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={30000.00} />
          <Coin name="Ethereum" ticker="ETH" price={3000.00} />
          <Coin name="Binance" ticker="BNB" price={300.00} />
          <Coin name="Tether" ticker="USDT" price={1.00} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
