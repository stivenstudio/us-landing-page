import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <header className={styles.header}>
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

      <section className={styles.hero} id="hero">
        <div className={styles.hero__columns}>
          <img src="hero (1).jpg" alt="" className={styles.img__hero__1} />
          <div>
            <h1 className={styles.hero__h1}>Una apuesta por la innovación</h1>
            <p>Crecimiento digital adaptado a tu negocio</p>
          </div>
        </div>
        <span className={styles.hero__scroll}>scroll</span>
      </section>

      <section className={styles.specializations} id="specializations">
        <h1 className={styles.specializations__h1}>Nos especializamos en el desarrollo de varios sistemas</h1>
        <h3><u>Desarrollo de Sistemas de Software</u></h3>

        <ul className={styles.specializations__ul}>
          <li className={styles.specializations__li}>
            <h3>Sistemas ERP</h3>
            <p>Desarrollamos sistemas de planificación de recursos empresariales (ERP) personalizados para ayudar a las empresas a gestionar sus operaciones de negocio.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Sistemas CRM</h3>
            <p>Creamos sistemas de gestión de relaciones con los clientes (CRM) para ayudar a las empresas a mejorar sus relaciones y la interacción con los clientes.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Aplicaciones Móviles</h3>
            <p>Desarrollamos aplicaciones móviles innovadoras y fáciles de usar para diversas plataformas.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Aplicaciones Web</h3>
            <p>Creamos aplicaciones web interactivas y receptivas que ofrecen una excelente experiencia de usuario.</p>
          </li>
          <li className={styles.specializations__li}>
            <h3>Aplicaciones Multiplataforma</h3>
            <p>Desarrollamos aplicaciones multiplataforma que funcionan sin problemas en diferentes sistemas operativos y dispositivos.</p>
          </li>
        </ul>
      </section>

      <div className={styles.container__star}>
        <img src="star.svg" alt="star" className={styles.star__svg} />
      </div>

      <ul className={styles.specializations__ul}>
        <li className={styles.specializations__li}>
          <h3>Diseño UI/UX</h3>
          <p>Creamos diseños de interfaz de usuario (UI) y experiencias de usuario (UX) atractivas y fáciles de usar.</p>
        </li>
        <li className={styles.specializations__li}>
          <h3>Diseño Digital</h3>
          <p>Ofrecemos servicios de diseño digital para ayudar a las empresas a destacar en el mundo digital.</p>
        </li>
      </ul>

      <div className={styles.container__star}>
        <img src="star.svg" alt="star" className={styles.star__svg} />
      </div>

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

      <section className={styles.projects} id="projects">
        <div className={styles.projects__columns}>
          <img src="hero (2).jpg" alt="" className={styles.img__hero__2} />
          <h1 className={styles.projects__h1}>PROYECTOS</h1>
        </div>

        <ul className={styles.projects__ul}>
          <li className={styles.projects__li__ul}>
            <h3>amucAPP</h3>
            <p>Lleva el inventario de tus cultivos fácil y sencillo teniendo control de insumos y tiempo de crecimiento y producción.</p>
          </li>
          <li className={styles.projects__li__ul}>
            <h3>slimAPP</h3>
            <p>ERP para empresas del segmento textil, facilita el control de inventario de materias prima, productos en confección y productos finales.</p>
          </li>
          <li className={styles.projects__li__ul}>
            <h3>AppSolar</h3>
            <p>Aplicación móvil que permite conocer la producción solar de un panel, considerando variables relacionadas como la temperatura, la humedad, el voltaje y la corriente del panel.</p>
          </li>
          <li className={styles.projects__li__ul}>
            <h3>AppEEnergias</h3>
            <p>Una aplicación móvil que permite conocer el consumo de energía eléctrica de un sistema eléctrico.</p>
          </li>
        </ul>
        
      </section>

      <footer className={styles.footer}>
        <b>2024</b>
        <a href="#hero">Subir</a>
      </footer>

    </main>
  );
}
