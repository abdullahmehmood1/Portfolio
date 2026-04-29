'use client'

import styles from './About.module.css'
import { motion } from 'framer-motion'
import { ShieldCheck, Terminal, ServerCog } from 'lucide-react'

const services = [
    {
        icon: Terminal,
        title: 'Full-Stack Development',
        desc: 'Building scalable, secure, and performant web applications from the ground up, utilizing modern tech stacks and architectural best practices.',
    },
    {
        icon: ShieldCheck,
        title: 'Cybersecurity & Auditing',
        desc: 'Conducting comprehensive vulnerability assessments, penetration testing, and securing digital perimeters against emerging cyber threats.',
    },
    {
        icon: ServerCog,
        title: 'System Architecture',
        desc: 'Designing and deploying robust, highly-available infrastructure with a security-first approach, ensuring seamless operations and data integrity.',
    },
]

export default function About() {
    return (
        <section id="services" className={`section ${styles.services}`}>
            <div className="container">
                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <service.icon size={36} strokeWidth={1} />
                            </div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.desc}>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
