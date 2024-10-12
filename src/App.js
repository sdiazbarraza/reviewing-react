import logo from './logo.svg';
import './App.css';
import Profile from './Profile'; // Importa el componente MyButton
import MyButton from './MyButton';

function App() {
  return (
    <div className="App">
        <Profile />
        <MyButton />
        <MyButton />
    </div>
  );
}

export default App;
