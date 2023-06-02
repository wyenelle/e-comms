import Men from './men'
import Women from './women'
import styles from './body.module.css'
import Wristwatch from './wristwatch'

const Body = () => {
  return (
    <section className={styles.container}>
        <Men />
        <Women/>
        <Wristwatch />
    </section>
  )
}

export default Body