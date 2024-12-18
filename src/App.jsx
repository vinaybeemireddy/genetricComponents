import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Pin from "./component/Pin";

function App() {
  return (
    <div className="App">
      <Pin length={5} maxLength={1} />
    </div>
  );
}

export default App;
