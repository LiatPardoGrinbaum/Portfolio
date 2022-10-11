import "./scss/App.css";
import Home from "./components/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
