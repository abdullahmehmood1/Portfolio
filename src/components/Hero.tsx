'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

const roles = [
    'Software Engineer',
    'Cybersecurity Specialist',
    'Full-Stack Developer',
    'System Architect',
]

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    // Typing animation
    useEffect(() => {
        const currentRole = roles[roleIndex]
        let timer: ReturnType<typeof setTimeout>

        if (!isDeleting && displayText !== currentRole) {
            timer = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length + 1))
            }, 85)
        } else if (!isDeleting && displayText === currentRole) {
            timer = setTimeout(() => setIsDeleting(true), 2200)
        } else if (isDeleting && displayText !== '') {
            timer = setTimeout(() => {
                setDisplayText(displayText.slice(0, -1))
            }, 45)
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false)
            setRoleIndex(prev => (prev + 1) % roles.length)
        }

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, roleIndex])

    return (
        <section className={`section ${styles.hero}`} id="home">
            {/* Animated background blobs */}
            <div className={styles.blobA} aria-hidden="true" />
            <div className={styles.blobB} aria-hidden="true" />
            <div className={styles.blobC} aria-hidden="true" />

            <div className={`container ${styles.container}`}>
                <div className={styles.row}>

                    {/* ── Content ── */}
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.div
                            className={styles.greeting}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                        >
                            <span className={styles.greetingDot} />
                            HELLO, MY NAME IS
                        </motion.div>

                        <motion.h1
                            className={styles.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28 }}
                        >
                            ABDULLAH MEHMOOD
                        </motion.h1>

                        <motion.div
                            className={styles.typedWrapper}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.40 }}
                        >
                            <span className={styles.bracket}>&lt;</span>
                            <span className={styles.dynamicText}>{displayText}</span>
                            <span className={styles.cursor} aria-hidden="true">|</span>
                            <span className={styles.bracket}>/&gt;</span>
                        </motion.div>

                        <motion.p
                            className={styles.desc}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.52 }}
                        >
                            I build robust, scalable applications and ensure they are secure from the ground up.
                            Combining software engineering best practices with proactive security strategies to
                            deliver reliable digital solutions.
                        </motion.p>

                        <motion.div
                            className={styles.actions}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.64 }}
                        >
                            <a href="#projects" id="hero-view-work-btn" className="btn-primary">
                                VIEW MY WORK
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#contact" id="hero-contact-btn" className="btn-secondary">
                                CONTACT ME
                            </a>
                        </motion.div>

                        {/* Mini stats strip */}
                        <motion.div
                            className={styles.miniStats}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {[
                                { num: '150+', lbl: 'Patches' },
                                { num: '45+', lbl: 'Systems' },
                                { num: '250k+', lbl: 'Lines of Code' },
                            ].map(s => (
                                <div key={s.lbl} className={styles.miniStat}>
                                    <span className={styles.miniNum}>{s.num}</span>
                                    <span className={styles.miniLbl}>{s.lbl}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Image ── */}
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className={styles.imageBox}>
                            {/* Animated gradient border ring */}
                            <div className={styles.imageRing} aria-hidden="true" />
                            <div className={styles.imageGlow} aria-hidden="true" />
                            <Image
                                src="/formlprofile.png"
                                alt="Abdullah Mehmood – Software & Cybersecurity Engineer"
                                width={420}
                                height={420}
                                className={styles.image}
                                priority
                            />
                            {/* Floating badge */}
                            <motion.div
                                className={styles.badge}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <span className={styles.badgeDot} />
                                Available for work
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
