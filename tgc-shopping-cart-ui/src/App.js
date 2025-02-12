import { BrowserRouter } from "react-router";
import "./App.css";
import NavigationBar from "./components/home/NavigationBar";
import RouterMapping from "./components/home/RouterMapping";

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
