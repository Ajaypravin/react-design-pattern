import SplitScreen from "./SpliScreen";
import "./App.css";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left !</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "yellow" }}>Right !</h1>;
};

function App() {
  return <SplitScreen Left={LeftHandComponent} Right={RightHandComponent} />;
}

export default App;
