import { Routes, Route } from "react-router-dom";
import connectionExample from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <connectionExample/> } />
      </Routes>
    </div>
  )
}

export default App