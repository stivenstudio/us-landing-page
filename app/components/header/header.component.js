import Link from "next/link";

import styles from "./header.module.css";

function HeaderComponent() {

  return (
    <header className={styles.header}>

      <div className={styles.container}>

        <nav className={styles.header__nav}>
          <Link href={""} className={styles.header__link__logo}>
            <b>INNOTECH</b>
            <p>Platforms</p>
          </Link>
          <ul className={styles.header__nav__col}>
            <li>
              <button>Contactar</button>
            </li>
            <li className={styles.header__nav__lang}>
              ES
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_99_11)">
                  <path
                    d="M11.99 2.5C6.47 2.5 2 6.98 2 12.5C2 18.02 6.47 22.5 11.99 22.5C17.52 22.5 22 18.02 22 12.5C22 6.98 17.52 2.5 11.99 2.5ZM18.92 8.5H15.97C15.65 7.25 15.19 6.05 14.59 4.94C16.43 5.57 17.96 6.85 18.92 8.5ZM12 4.54C12.83 5.74 13.48 7.07 13.91 8.5H10.09C10.52 7.07 11.17 5.74 12 4.54ZM4.26 14.5C4.1 13.86 4 13.19 4 12.5C4 11.81 4.1 11.14 4.26 10.5H7.64C7.56 11.16 7.5 11.82 7.5 12.5C7.5 13.18 7.56 13.84 7.64 14.5H4.26ZM5.08 16.5H8.03C8.35 17.75 8.81 18.95 9.41 20.06C7.57 19.43 6.04 18.16 5.08 16.5ZM8.03 8.5H5.08C6.04 6.84 7.57 5.57 9.41 4.94C8.81 6.05 8.35 7.25 8.03 8.5ZM12 20.46C11.17 19.26 10.52 17.93 10.09 16.5H13.91C13.48 17.93 12.83 19.26 12 20.46ZM14.34 14.5H9.66C9.57 13.84 9.5 13.18 9.5 12.5C9.5 11.82 9.57 11.15 9.66 10.5H14.34C14.43 11.15 14.5 11.82 14.5 12.5C14.5 13.18 14.43 13.84 14.34 14.5ZM14.59 20.06C15.19 18.95 15.65 17.75 15.97 16.5H18.92C17.96 18.15 16.43 19.43 14.59 20.06ZM16.36 14.5C16.44 13.84 16.5 13.18 16.5 12.5C16.5 11.82 16.44 11.16 16.36 10.5H19.74C19.9 11.14 20 11.81 20 12.5C20 13.19 19.9 13.86 19.74 14.5H16.36Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_99_11">
                    <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </li>
          </ul>
        </nav>
        <section className={styles.header__hero}>
          <h1>
            Impulsa tu Negocio hacia el Futuro con Soluciones Innovadoras
          </h1>
        </section>

        <section className={styles.header__description}>
          <p>
            Explora nuestra plataforma, el líder en soluciones innovadoras. Redefinimos el modelo empresarial, ofreciendo una visión completa de su organización.
          </p>
        </section>

      </div>

    </header>
  )

}

export default HeaderComponent