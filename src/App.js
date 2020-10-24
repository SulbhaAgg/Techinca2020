import logo from './logo.svg';
import './App.css';
import Piechart from './components/Piechart'
import LineChart from './components/LineChart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* <Piechart></Piechart> */}
      <LineChart></LineChart>
    </div>
    
  );
}

export default App;
