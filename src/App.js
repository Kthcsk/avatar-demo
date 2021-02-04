import './App.css';
import Personaje from './components/Personaje/Personaje';
import Barra from './components/Barra/Barra';

function App() {
  return (
    <div className="App container">
      <h2>Avatar Demo</h2>
      <Personaje/>
      <Barra/>
    </div>
  );
}

export default App;
