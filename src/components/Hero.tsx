'use client'

import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className={`section ${styles.hero}`} id="about">
            <div className={`container ${styles.container}`}>
                <div className={styles.row}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className={styles.subtitle}>HELLO, MY NAME IS</h4>
                        <h1 className={styles.title}>ABDULLAH MEHMOOD</h1>
                        <h2 style={{ fontFamily: 'Poppins, sans-serif', color: 'var(--accent-primary)', marginBottom: '20px', fontSize: '20px', fontWeight: 600 }}>Software & Cybersecurity Engineer</h2>
                        <p className={styles.desc}>
                            I build robust, scalable applications and ensure they are secure from the ground up. Combining software engineering best practices with proactive security strategies to deliver reliable digital solutions.
                        </p>
                        <a href="#projects" className="btn-primary">VIEW MY WORK</a>
                    </motion.div>

                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.imageBox}>
                            <img
                                src="/formlprofile.png"
                                alt="Abdullah Mehmood"
                                className={styles.image}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
