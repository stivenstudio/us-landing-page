import Link from "next/link";

import styles from "./header.module.css";

function HeaderComponent() {

    return (
        <div className={styles.header__container}>
        <header className={styles.header}>
          <Link href={"/"}>
            <h1 className={styles.header__h1}>
              INNOTECH
            </h1>
          </Link>
          <nav className={styles.header__nav}>
            <ul className={styles.nav__ul}>
              <li className={styles.nav__ul__li}>
                <a href="#specializations">SERVICIOS</a>
              </li>
              <li className={styles.nav__ul__li}>
                <a href="#projects">PROYECTOS</a>
              </li>
            </ul>
          </nav>
        </header>

      </div>
    )
    
}

export default HeaderComponent