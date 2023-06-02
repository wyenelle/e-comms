import styles from "./App.module.css";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";

function App() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.appSection}>
        <Nav />
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
