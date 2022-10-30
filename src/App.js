import "./scss/App.css";
import Home from "./components/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
