"use client"

import SliderComponent from "./slider/slider.component"

import styles from "./specializations.module.css";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function SpecializationsComponent() {

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
        <section className={styles.specializations} id="specializations">

            <h1 className={styles.specializations__h1}>Nos especializamos en el desarrollo de varios sistemas</h1>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={controls}
                transition={{ duration: 1, delay: 1 }}
            >
                <h3 className={styles.specializations__h3}><u>Desarrollo de Sistemas de Software</u></h3>
                <SliderComponent />
            </motion.div>

        </section>
    )
}

export default SpecializationsComponent