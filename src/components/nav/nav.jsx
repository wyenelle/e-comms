import styles from './nav.module.css'
import {RxHamburgerMenu} from 'react-icons/rx'

const Nav = () => {
  return (
    <nav className={styles.container}>
        <h1>cliptoShop</h1>
        <ul className={styles.list}>
            <li className={styles.listItem}>register</li>
            <li className={styles.listItem}>login</li>
        </ul>
        <RxHamburgerMenu size={35} className={styles.hamburger} />
    </nav>
  )
}

export default Nav