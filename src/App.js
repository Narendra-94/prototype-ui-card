import ReactDOM from "react-dom";
import { PrototypeCard } from "./components/PrototypeCard";
import "./App.css";

export const App = () => {
  return (
    <div className="App-container">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <PrototypeCard />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
