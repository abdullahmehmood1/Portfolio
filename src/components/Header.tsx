'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SERVICES', id: 'services' },
    { label: 'PORTFOLIO', id: 'projects' },
    { label: 'CONTACT', id: 'contact' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id: string) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }
        setSidebarOpen(false)
    }

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.nav}`}>
                    {/* Logo */}
                    <a href="/" className={styles.logo}>
                        <div className={styles.logoIcon}>
                            <div className={styles.logoDot} />
                            <div className={styles.logoDot} />
                            <div className={styles.logoDot} />
                            <div className={styles.logoDot} />
                        </div>
                        <span>Abdullah</span>
                    </a>

                    {/* Sidebar Toggle Button */}
                    <div className={styles.menuControls}>
                        <button
                            className={styles.menuToggle}
                            onClick={() => setSidebarOpen(v => !v)}
                            aria-label="Toggle menu"
                        >
                            <Menu size={28} color="var(--text-primary)" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <>
                        <motion.div
                            className={styles.overlay}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSidebarOpen(false)}
                        />
                        <motion.div
                            className={styles.sidebar}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className={styles.sidebarHeader}>
                                <a href="/" className={styles.logoLight}>
                                    <div className={styles.logoIcon}>
                                        <div className={styles.logoDot} />
                                        <div className={styles.logoDot} />
                                        <div className={styles.logoDot} />
                                        <div className={styles.logoDot} />
                                    </div>
                                    <span>Abdullah</span>
                                </a>
                                <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>
                                    <X size={28} color="#777" />
                                </button>
                            </div>
                            <ul className={styles.sidebarLinks}>
                                {navLinks.map((link) => (
                                    <li key={link.id}>
                                        <button onClick={() => scrollTo(link.id)} className={styles.sidebarLink}>
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
