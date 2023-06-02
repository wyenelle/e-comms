import styles from  './App.module.css'
import Body from './components/body/body'
import Header from './components/header/header'
import Nav from './components/nav/nav'

function App() {

  return (
   <main className={styles.wrapper}>
      <section className={styles.appSection}>
          <Nav/>
          <Header />
          <Body />
      </section>
   </main>
  )
}

export default App
