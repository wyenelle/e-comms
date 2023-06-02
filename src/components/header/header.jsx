import styles from './header.module.css'
const Header = () => {
  return (
    <section className={styles.container}>
        <div className={styles.cart}>
            <h3>cart</h3>
        </div>
        <div className={styles.header}>
        <h1>
            Home of all your needs
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus doloremque minima perspiciatis exercitationem, porro praesentium reiciendis quasi illo aut delectus!
        </p>
        <button className={styles.btn}>
            see  more
        </button>
        </div>
        <div className={styles.col2}>

        </div>
    </section>
  )
}

export default Header