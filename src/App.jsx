import styles from "./App.module.css";

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import Message from "./pages/message/message";
import Profile from "./pages/profile/profile";
import Favourite from "./pages/favourite/favourite";

function App() {
  const [showHamburger, setShowHamburger] = useState(false);
  function handleHamburger() {
    setShowHamburger(false);
  }
  return (
    <main className={styles.wrapper} onClick={handleHamburger}>
      <Nav showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showHamburger={showHamburger}
              setShowHamburger={setShowHamburger}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/message" element={<Message />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <div className={styles.space}></div>
      <aside className={styles.footer}>
        <Footer />
      </aside>
    </main>
  );
}

export default App;
