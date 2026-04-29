'use client'

import styles from './Skills.module.css'
import { motion } from 'framer-motion'

const stats = [
    { value: '150+', label: 'Vulnerabilities Patched' },
    { value: '45+', label: 'Systems Secured' },
    { value: '250k+', label: 'Lines of Code' },
    { value: '10+', label: 'Security Certifications' },
]

export default function Skills() {
    return (
        <section className={`section ${styles.stats}`}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className={styles.item}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <h2 className={styles.value}>{stat.value}</h2>
                            <p className={styles.label}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
