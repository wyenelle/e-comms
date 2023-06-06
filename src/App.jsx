import styles from "./App.module.css";

import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/home/home";


function App() {
  const [showHamburger, setShowHamburger] = useState(false);
  function handleHamburger(){
    setShowHamburger(false)
  }
  return (
    <main className={styles.wrapper} onClick={handleHamburger}>
      <Routes>
        <Route path="/" element={<Home  showHamburger={showHamburger} setShowHamburger={setShowHamburger} />} />
      </Routes>
    </main>
  );
}

export default App;
