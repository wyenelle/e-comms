import { useState } from "react";
import styles from "./nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = ({showHamburger,setShowHamburger}) => {

  function handleHamburger(e) {
    e.stopPropagation()
    setShowHamburger(!showHamburger);
  }
  return (
    <nav className={styles.container}>
      <h1 className={styles.header}>cliptoShop</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>register</li>
        <li className={styles.listItem}>login</li>
      </ul>
      <RxHamburgerMenu
        size={35}
        className={styles.hamburger}
        onClick={handleHamburger}
      />

      {/* this menu shows only when the state is truthy. for mobile screen only */}
      {showHamburger && (
        <section className={styles.hamburgerSection}>
          <ul className={styles.hamburgerList}>
            <li className={styles.hamburgerItem}> register</li>
            <li className={styles.hamburgerItem}> register</li>
          </ul>
        </section>
      )}
    </nav>
  );
};

export default Nav;
