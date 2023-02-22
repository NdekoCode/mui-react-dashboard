import { BrowserRouter } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
