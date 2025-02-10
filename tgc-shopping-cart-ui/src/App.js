import { BrowserRouter } from "react-router";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import RouterMapping from "./components/RouterMapping";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <RouterMapping />
      </BrowserRouter>
    </div>
  );
}

export default App;
