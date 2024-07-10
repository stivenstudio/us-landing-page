import Link from "next/link";
import styles from "./page.module.css";

import Slider from "./components/Slider";
import HeroComponent from "./components/hero/hero.component";

export default function Home() {


  return (
    <main className={styles.main}>

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

      <section className={styles.hero} id="hero">
        <div className={styles.hero__container}>
          <div className={styles.hero__columns}>

            <HeroComponent />

            <div className={styles.hero__right}>
              <h1 className={styles.hero__h1}>Una apuesta por la innovación</h1>
              <p>Crecimiento digital adaptado a tu negocio</p>
              <button>
                CONTACTAR
              </button>
            </div>
          </div>
          <span className={styles.hero__scroll}>scroll</span>
        </div>
      </section>

      {/* especializaciones */}
      <section className={styles.specializations} id="specializations">

        <h1 className={styles.specializations__h1}>Nos especializamos en el desarrollo de varios sistemas</h1>

        <div>
          <h3 className={styles.specializations__h3}><u>Desarrollo de Sistemas de Software</u></h3>
          <Slider />
        </div>

      </section>



      <div className={styles.specializations__uiux}>
        <ul className={styles.specializations__ul}>
          <li className={styles.specializations__li}>
            <img loading="lazy" src="uiux.jpg" alt="ui/ux design" className={styles.img__specialization__uiux} />
            <h3>Diseño UI/UX</h3>
            <p>Creamos diseños de interfaz de usuario (UI) y experiencias de usuario (UX) atractivas y fáciles de usar.</p>
          </li>
          <li className={styles.specializations__li}>
            <img loading="lazy" src="design digital.jpg" alt="digital design" className={styles.img__specialization__digitaldesign} />
            <h3>Diseño Digital</h3>
            <p>Ofrecemos servicios de diseño digital para ayudar a las empresas a destacar en el mundo digital.</p>
          </li>
        </ul>
      </div>

      <section className={styles.specializations__others}>

        <ul className={styles.specializations__ul}>
          <li className={styles.specializations__li}>
            <h3>Servicios AWS</h3>
            <p>Ofrecemos una variedad de servicios en la nube a través de Amazon Web Services (AWS), que incluyen almacenamiento, bases de datos, análisis, inteligencia artificial, desarrollo de aplicaciones y más.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Facturación Electrónica</h3>
            <p>Emitimos facturación electrónica a entes gubernamentales, facilitando el proceso de facturación y garantizando la conformidad con las regulaciones locales.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Análisis de Sistemas de Software</h3>
            <p>Proporcionamos análisis de sistemas de software para ayudar a las empresas a entender y mejorar sus sistemas de software existentes.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Análisis de Riesgo para Empresas</h3>
            <p>Ofrecemos servicios de análisis de riesgo para ayudar a las empresas a identificar, evaluar y mitigar los riesgos potenciales.</p>
          </li>
        </ul>

      </section>


      <section className={styles.projects} id="projects">

        <div className={styles.projects__container}>
          <h1 className={styles.projects__h1}>PROYECTOS</h1>

          <ul className={styles.projects__ul}>
            <li className={styles.projects__li__ul}>
              <img loading="lazy" src="amucapp.svg" alt="amucAPP" className={styles.projects__img__li} />
              <h3>amucAPP</h3>
              <p>Lleva el inventario de tus cultivos fácil y sencillo teniendo control de insumos y tiempo de crecimiento y producción.</p>
            </li>
            <li className={styles.projects__li__ul}>
              <img loading="lazy" src="slimapp.svg" alt="slimAPP" className={styles.projects__img__li} />
              <h3>slimAPP</h3>
              <p>ERP para empresas del segmento textil, facilita el control de inventario de materias prima, productos en confección y productos finales.</p>
            </li>
          </ul>
        </div>

      </section>

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
