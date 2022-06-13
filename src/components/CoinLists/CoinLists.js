import React from 'react';
import './CoinLists.css';
import useCoins from '../../hooks/useCoins';
import { numberWithCommas, changeNumColor } from '../../utils';

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
                <td className="number-text">
                  {numberWithCommas(coin.current_price.toFixed(2))}
                </td>
                <td
                  className="number-text"
                  style={{
                    color: changeNumColor(coin.price_change_percentage_24h),
                  }}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
                <td className="number-text">
                  {numberWithCommas(coin.market_cap.toString().slice(0, -6))} M
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default CoinLists;
