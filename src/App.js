import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; // Importa el componente MyButton
import MyButton from './MyButton';
import {CountProvider} from './CountContext';


function App() {
  return (
    <CountProvider>
      <div className="App">
        <Profile />
        <MyButton action='increment'/>
        <MyButton action='decrement' />
      </div>
    </CountProvider>
  );
}

export default App;
