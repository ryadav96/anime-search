import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
