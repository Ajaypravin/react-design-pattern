import SplitScreen from "./SpliScreen";
import "./App.css";

const LeftHandComponent = ({ text }) => {
  return <h1 style={{ backgroundColor: "green" }}>{text}</h1>;
};

const RightHandComponent = () => {
  return <h1 style={{ backgroundColor: "yellow" }}>Right !</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      {/* This approch is good if we want to pass a component with props */}
      <LeftHandComponent text={"Left !"} />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
