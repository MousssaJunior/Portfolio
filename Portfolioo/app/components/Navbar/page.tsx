"use client"

import styles from "./Navbar.module.css"
import { useState } from "react"

export default function Navbar() {

  const [showLinks, setShowLinks] = useState(false)

  const handleShowLinks = () => {
    setShowLinks(prev => !prev)
  }

  return (
    <div  className={styles.center}>

    <nav className={`${styles.Navbar} ${showLinks ? styles.show_nav : ""}`}>

      <div className={styles.navbar_Logo}>
        <img src="#" alt="logo" />
      </div>

      <ul className={styles.navbar_Links}>
        <li className={styles.navbar_item}>
          <a href="#" className={styles.navbar_Link}>Qui je suis </a>
        </li>
            <li className={styles.navbar_item}>
          <a href="#" className={styles.navbar_Link}>Compétences</a>
        </li>

         <li className={styles.navbar_item}>
          <a href="#" className={styles.navbar_Link}>Projets</a>
        </li>

    

       

        <li className={styles.navbar_item}>
          <a href="#" className={styles.navbar_Link}>Contact</a>
        </li>
      </ul>

      <button
        className={styles.navbar_burger}
        onClick={handleShowLinks}
      >
        <span className={styles.navbar_bar}></span>
      </button>

    </nav>

    </div>
  )
}