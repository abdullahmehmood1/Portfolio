'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

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
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Mouse-follow gradient orb
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const scrollTo = (id: string) => {
        if (id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const el = document.getElementById(id)
            if (el) {
                const offset = 80
                window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
            }
        }
        setSidebarOpen(false)
    }

    return (
        <>
            {/* Mouse follow orb */}
            <div className={styles.mouseOrb} aria-hidden="true" />

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

                    {/* Controls */}
                    <div className={styles.menuControls}>
                        <motion.button
                            id="theme-toggle-btn"
                            className={styles.themeToggle}
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.span
                                    key={theme}
                                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>
                        <button
                            id="sidebar-toggle-btn"
                            className={styles.menuToggle}
                            onClick={() => setSidebarOpen(v => !v)}
                            aria-label="Toggle menu"
                        >
                            <Menu size={26} color="var(--text-primary)" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar */}
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
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
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
                                <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)} aria-label="Close menu">
                                    <X size={26} color="var(--text-muted)" />
                                </button>
                            </div>
                            <ul className={styles.sidebarLinks}>
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.id}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07 + 0.1 }}
                                    >
                                        <button onClick={() => scrollTo(link.id)} className={styles.sidebarLink}>
                                            <span className={styles.linkNumber}>0{i + 1}</span>
                                            {link.label}
                                        </button>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className={styles.sidebarFooter}>
                                <p>Let&apos;s build something amazing together.</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
