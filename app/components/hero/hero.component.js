"use client"

import styles from "@/app/page.module.css";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function HeroComponent() {

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

    // Dan tiron al usar esto
    // useEffect(() => {
    //     if (elementView) {
    //         controls.start({ opacity: 1, y: 0 })
    //     }
    // }, [elementView, controls])

    
    return (
        <motion.div
            // ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <img loading="lazy" src="hero (1).jpg" alt="" className={styles.img__hero__1} />

        </motion.div>
    )
}

export default HeroComponent