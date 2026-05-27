'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import { motion, useInView } from 'framer-motion'

const stats = [
    { value: 150, label: 'Vulnerabilities Patched', suffix: '+', icon: '🛡️' },
    { value: 45,  label: 'Systems Secured',         suffix: '+', icon: '🔐' },
    { value: 250, label: 'Lines of Code (k)',        suffix: 'k+', icon: '💻' },
    { value: 10,  label: 'Security Certifications',  suffix: '+', icon: '🏆' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    useEffect(() => {
        if (!isInView) return
        let frame = 0
        const totalFrames = 80
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

        const tick = () => {
            frame++
            const progress = easeOut(frame / totalFrames)
            setCount(Math.round(progress * target))
            if (frame < totalFrames) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
    }, [isInView, target])

    return (
        <div ref={ref} className={styles.counterWrap}>
            <span className={styles.value}>{count}{suffix}</span>
        </div>
    )
}

export default function Skills() {
    return (
        <section className={`section ${styles.stats}`} id="about">
            <div className={styles.bgGlow} aria-hidden="true" />
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.label}>
                        <span />BY THE NUMBERS<span />
                    </div>
                    <h2 className={styles.title}>Impact in <span className={styles.accent}>Numbers</span></h2>
                </motion.div>

                <div className={styles.grid}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className={styles.item}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -6 }}
                        >
                            <div className={styles.icon}>{stat.icon}</div>
                            <Counter target={stat.value} suffix={stat.suffix} />
                            <p className={styles.itemLabel}>{stat.label}</p>
                            <div className={styles.itemBar} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
