import styles from "./projects.module.css"

function ProjectsComponent() {
    return (
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
    )
}

export default ProjectsComponent