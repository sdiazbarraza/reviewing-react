import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; // Importa el componente MyButton
import MyButton from './MyButton';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
        <Profile />
        <MyButton count={count} handleClick={handleClick} />
        <MyButton count={count} handleClick={handleClick} />
    </div>
  );
}

export default App;
