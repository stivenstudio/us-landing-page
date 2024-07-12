import styles from "./others.module.css";

function OthersComponent() {
    return (
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
    )
}

export default OthersComponent