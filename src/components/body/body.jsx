import Men from './men'
import Women from './women'
import styles from './body.module.css'

const Body = () => {
  return (
    <section className={styles.container}>
        <Men />
        <Women/>
    </section>
  )
}

export default Body