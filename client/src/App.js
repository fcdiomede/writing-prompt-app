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
    </div>
  );
}

export default App;
