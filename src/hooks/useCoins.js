import axios from 'axios';
import { useState, useEffect } from 'react';

const useCoins = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      setCoins(data);
      setIsLoading(false);
    };
    fetchCoins();
  }, []);

  return [coins, isLoading];
};

export default useCoins;
