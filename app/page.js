import Link from "next/link";
import styles from "./page.module.css";

import HeroComponent from "./components/hero/hero.component";
import HeaderComponent from "./components/header/header.component";
import SpecializationsComponent from "./components/specializations/specializations.component";
import UiuxComponent from "./components/uiux/uiux.component";
import OthersComponent from "./components/others/others.component";
import ProjectsComponent from "./components/projects/projects.component";

export default function Home() {


  return (
    <main className={styles.main}>

      <HeaderComponent />

      <HeroComponent />

      <SpecializationsComponent />

      <UiuxComponent />

      <OthersComponent />

      <ProjectsComponent />


      {/* footer */}
      <footer className={styles.footer}>
        <div className={styles.footer__container}>

          <ul className={styles.footer__contact}>
            <li>+57 311-123-1234</li>
            <li>info@innotech</li>
            <li>Popayán, Cauca - Colombia</li>
          </ul>

          <ul className={styles.footer__copyright}>
            <li>Política de privacidad</li>
            <li>© 2024</li>
          </ul>

          <a href="#hero" className={styles.footer__up}>Subir</a>

        </div>
      </footer>

    </main>
  );
}
