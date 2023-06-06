import Header from '../../components/header/header'
import Body from '../../components/body/body'
import styles from './home.module.css'

const Home = () => {
  return (
    <section className={styles.appSection}>
    <Header />
    <Body />
  </section>
    )
}

export default Home