import React from 'react'
import Nav from '.././../components/nav/nav'
import Header from '../../components/header/header'
import Body from '../../components/body/body'
import styles from './home.module.css'
import Footer from '../../components/footer/footer'

const Home = ({showHamburger, setShowHamburger}) => {
  return (
    <section className={styles.appSection}>
    <Nav showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
    <Header />
    <Body />

    <aside className={styles.footer}>
      <Footer />
    </aside>
  </section>
    )
}

export default Home