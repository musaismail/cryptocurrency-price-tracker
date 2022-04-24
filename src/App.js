import './App.css';
import React,{useEffect, useState} from 'react';
import Search from './Search';
import Coin from './Coin';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [coins, setCoin] = useState([])
  
  function handleChange(e){
    e.preventDefault()
    setSearch(e.target.value)
  }
const filteredcoin = coins.filter(coin=>
  coin.name.toLowerCase().includes(search.toLowerCase())
)


useEffect(()=>{
 axios
 .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
.then(
  res=>{
    setCoin(res.data)
  })
  .catch(error=> console.log(error))
},[])
  
  
  
  return (
    <div className="coin-app">
        <div className='coin-search'>
          <Search  value={search} handleChange={handleChange} />
        </div>
        {filteredcoin.map((coin)=>(
        <Coin  
          key={coin.id} 
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}/>
        ))}
      </div>
  );
}

export default App;
