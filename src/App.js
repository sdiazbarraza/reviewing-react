import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; // Importa el componente MyButton
import MyButton from './MyButton';
import { useState } from 'react';
import CountContext from './CountContext';


function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, handleClick }}>
      <div className="App">
          <Profile />
          <MyButton />
          <MyButton />
      </div>
    </CountContext.Provider>

  );
}

export default App;
