import Men from './men'
import Women from './women'
import styles from './body.module.css'
import Wristwatch from './wristwatch'
import Accessories from './accessories'

const Body = () => {
  return (
    <section className={styles.container}>
        <Men />
        <Women/>
        <Wristwatch />
        <Accessories />
    </section>
  )
}

export default Body