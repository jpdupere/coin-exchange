import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>Coin Exchange</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={30200} />
          <Coin name="Ethereum" ticker="ETH" price={3500} />
          <Coin name="Binance" ticker="BNB" price={300} />
          <Coin name="Tether" ticker="USDT" price={1} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
