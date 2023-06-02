import styles from "./App.module.css";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import { useState } from "react";

function App() {
  const [showHamburger, setShowHamburger] = useState(false);
  function handleHamburger(){
    setShowHamburger(false)
  }
  return (
    <main className={styles.wrapper}onClick={handleHamburger}>
      <section className={styles.appSection}>
        <Nav showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
        <Header />
        <Body />

        <aside className={styles.footer}>
          <Footer />
        </aside>
      </section>
    </main>
  );
}

export default App;
