// import logo from './logo.svg';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.css";
import Header from "./components/Header";
import ImageView from "./components/ImageView";
import Spinner from "./components/UI/LoadingSpinner/Spinner";
import { fetchAllData } from "./store/url-actions";

function App() {
  const dispatch = useDispatch();
  const loadingFlag = useSelector((state) => state.ui.loading);

  console.log("Loading: ", loadingFlag);

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <div className={"middle-part"}>
        {loadingFlag ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          <ImageView />
        )}
      </div>
    </div>
  );
}

export default App;
