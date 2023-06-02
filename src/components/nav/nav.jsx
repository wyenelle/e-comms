import styles from './nav.module.css'


const Nav = () => {
  return (
    <nav className={styles.container}>
        <h1>cliptoShop</h1>
        <ul className={styles.list}>
            <li className={styles.listItem}>register</li>
            <li className={styles.listItem}>login</li>
        </ul>

    </nav>
  )
}

export default Nav