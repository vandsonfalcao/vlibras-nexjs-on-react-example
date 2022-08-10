import logo from './logo.svg';
import './App.css';
import VLibras from 'vlibras-nextjs';

function App() {
  return (
    <div className="App">
      <VLibras forceOnload />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Bem vindo ao exemplo da lib vlibras-nextjs em aplicações React.js!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esse Repositório
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          vlibras-nextjs
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Vandson Falcão
        </a>
      </header>
    </div>
  );
}

export default App;
