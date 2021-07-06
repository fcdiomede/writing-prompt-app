import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import WritingArea from "./components/WritingArea";

function App() {
  return (
    <div className="App">
      <Header />
      <Prompt />
      <WritingArea />
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
    </div>
  );
}

export default App;
