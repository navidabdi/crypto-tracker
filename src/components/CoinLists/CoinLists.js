import React from 'react';
import './CoinLists.css';
import useCoins from '../../hooks/useCoins';

const CoinLists = () => {
  const { coins, isLoading } = useCoins();
  return (
    <section className="container">
      <table className="coin-list">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            {console.log(isLoading, coins)}
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            coins?.map((coin) => (
              <tr key={coin.id}>
                <th className="coin-photo">
                  <img src={coin.image} alt={coin.name} />
                  <div className="coin-name">
                    <span className="symbol">{coin.symbol}</span>
                    <span className="name">{coin.name}</span>
                  </div>
                </th>
                <td>{coin.current_price}</td>
                <td>{coin.price_change_percentage_24h}</td>
                <td>{coin.market_cap}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default CoinLists;
