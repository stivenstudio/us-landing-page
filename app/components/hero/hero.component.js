"use client"

import styles from "@/app/page.module.css";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function HeroComponent() {

    // const controls = useAnimation()
    // const [elementView, setElementView] = useState(false)
    // const ref = useRef(null)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (ref.current) {
    //             const rect = ref.current.getBoundingClientRect()
    //             if (rect.top < window.innerHeight && rect.bottom >= 0) {
    //                 setElementView(true)
    //             }
    //         }
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     handleScroll()

    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    // Dan tiron al usar esto
    // useEffect(() => {
    //     if (elementView) {
    //         controls.start({ opacity: 1, y: 0 })
    //     }
    // }, [elementView, controls])

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.hero__container}>
                <div className={styles.hero__columns}>

                    <motion.div
                        // ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img loading="lazy" src="hero (1).jpg" alt="" className={styles.img__hero__1} />
                    </motion.div>

                    <motion.div
                        className={styles.hero__right}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h1 className={styles.hero__h1}>Una apuesta por la innovación</h1>
                        <p>Crecimiento digital adaptado a tu negocio</p>
                        <button>
                            CONTACTAR
                        </button>
                    </motion.div>
                    
                </div>
                <span className={styles.hero__scroll}>scroll</span>
            </div>
        </section>
    )
}

export default HeroComponent