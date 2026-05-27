'use client'

import styles from './About.module.css'
import { motion } from 'framer-motion'
import { ShieldCheck, Terminal, ServerCog } from 'lucide-react'

const services = [
    {
        icon: Terminal,
        title: 'Full-Stack Development',
        desc: 'Building scalable, secure, and performant web applications from the ground up, utilizing modern tech stacks and architectural best practices.',
        gradient: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
        glow: 'rgba(37, 99, 235, 0.25)',
    },
    {
        icon: ShieldCheck,
        title: 'Cybersecurity & Auditing',
        desc: 'Conducting comprehensive vulnerability assessments, penetration testing, and securing digital perimeters against emerging cyber threats.',
        gradient: 'linear-gradient(135deg, #f43f5e, #6366f1)',
        glow: 'rgba(244, 63, 94, 0.2)',
    },
    {
        icon: ServerCog,
        title: 'System Architecture',
        desc: 'Designing and deploying robust, highly-available infrastructure with a security-first approach, ensuring seamless operations and data integrity.',
        gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)',
        glow: 'rgba(16, 185, 129, 0.2)',
    },
]

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const item: any = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function About() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                {/* Section header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>
                        <span />WHAT I DO<span />
                    </div>
                    <h2 className={styles.title}>
                        My <span className={styles.accent}>Services</span>
                    </h2>
                    <p className={styles.subtitle}>
                        From secure code to hardened infrastructure — I cover the full spectrum of modern digital engineering.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.title}
                            variants={item}
                            className={styles.card}
                            whileHover={{ y: -8 }}
                        >
                            <div
                                className={styles.iconWrapper}
                                style={{
                                    background: service.gradient,
                                    boxShadow: `0 12px 32px ${service.glow}`,
                                }}
                            >
                                <service.icon size={32} strokeWidth={1.5} color="#fff" />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.desc}>{service.desc}</p>
                            <div className={styles.cardAccentLine} style={{ background: service.gradient }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
