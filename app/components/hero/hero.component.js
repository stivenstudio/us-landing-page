"use client"

import styles from "./hero.module.css";

import { motion } from "framer-motion";

function HeroComponent() {

    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__columns}>

                    <motion.div
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
                <motion.div
                    className={styles.hero__scroll}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: 2 }}
                >
                    SCROLL
                </motion.div>
            </div>
        </section>
    )
}

export default HeroComponent