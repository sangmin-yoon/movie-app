import "./Reset.css";
import Nav from "./Nav";
import Home from "./Home";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
