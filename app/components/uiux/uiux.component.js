"use client"

import styles from "./uiux.module.css";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function UiuxComponent() {

    const controls = useAnimation()
    const [elementView, setElementView] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect()
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setElementView(true)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (elementView) {
            controls.start({ opacity: 1, y: 0 })
        }
    }, [elementView, controls])

    return (
        <div className={styles.specializations__uiux}>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 1, delay: 1 }}
            >
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
            </motion.div>
        </div>
    )
}

export default UiuxComponent