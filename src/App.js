// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import ImageView from "./components/ImageView";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"middle-part"}>
        <ImageView />
      </div>
    </div>
  );
}

export default App;
