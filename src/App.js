import "./App.css";
import StarbucksInput from "./components/starbucks-input/StarbucksInput.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StarbucksInput />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
