// import logo from './logo.svg';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import ImageView from "./components/ImageView";
import { fetchAllData } from "./store/url-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);
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
