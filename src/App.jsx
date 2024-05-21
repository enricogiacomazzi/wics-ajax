import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Cocktail from './components/Cocktail';

const baseUrl = 'https://www.thecocktaildbculo.com/api/json/v1/1/filter.php?a=Alcoholic';

const wait = (time) => new Promise(res => {
  setTimeout(res, time);
})

async function getData() {
  await wait(2000);
  return await axios.get(baseUrl);
}

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getCocktails();
  }, []);

  async function getCocktails() {
    setWaiting(true);
    const {data} = await getData();
    setCocktails(data.drinks);
    setWaiting(false);
  }

  if(waiting) {
    return <h1>aspetta...</h1>
  }

  return (
    <div className="container">
      {cocktails.map(c => <Cocktail key={c.idDrink} data={c}/>)}
    </div>
  )
}

export default App
