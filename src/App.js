import './App.css';
import { Header, Hero } from './components';

import useCoins from './hooks/useCoins';

const App = () => {
  const [isLodaing, coins] = useCoins();

  return (
    <div className="App">
      <Header />
      <Hero />
      {console.log(isLodaing, coins)}
    </div>
  );
};

export default App;
