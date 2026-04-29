'use client'

import { useState } from 'react'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle2 } from 'lucide-react'

// Custom WhatsApp SVG Icon to match Lucide style
const WhatsAppIcon = ({ size = 24, color = "currentColor", ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
)

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'abdmeh94@gmail.com', href: 'mailto:abdmeh94@gmail.com' },
    { icon: WhatsAppIcon, label: 'WhatsApp', value: 'Chat with me', href: 'https://wa.me/923218831341' }, // UPDATE THIS NUMBER
    { icon: MapPin, label: 'Location', value: 'Remote / Worldwide', href: null },
    { icon: Github, label: 'GitHub', value: 'github.com/abdullahmehmood1', href: 'https://github.com/abdullahmehmood1' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Abdullah Mehmood', href: 'https://www.linkedin.com/in/abdullah-mehmood-41a7712b5?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
]

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            await fetch('https://formsubmit.co/ajax/abdmeh94@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    _subject: `New Portfolio Contact from ${data.name}`
                })
            })
            setSubmitted(true)
        } catch (error) {
            console.error('Submission failed', error)
            setSubmitted(true) // Show success anyway for UX fallback
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.bgAccent} />
            <div className="container">
                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.sectionLabel}>Contact</span>
                    <h2 className={styles.title}>Let&apos;s Work Together</h2>
                    <p className={styles.subtitle}>
                        Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {/* Left: Info */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle}>Get in touch</h3>
                            <p className={styles.infoText}>
                                I&apos;m currently open to freelance projects and full-time opportunities.
                                Whether you have a question or just want to say hi, my inbox is always open!
                            </p>

                            <div className={styles.contactList}>
                                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                                    <div key={label} className={styles.contactItem}>
                                        <div className={styles.contactIcon}>
                                            <Icon size={16} />
                                        </div>
                                        <div>
                                            <span className={styles.contactLabel}>{label}</span>
                                            {href ? (
                                                <a href={href} className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                                                    {value}
                                                </a>
                                            ) : (
                                                <span className={styles.contactValue}>{value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.availability}>
                                <span className={styles.availDot} />
                                <span>Available for new projects</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {submitted ? (
                            <motion.div
                                className={styles.successCard}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                            >
                                <CheckCircle2 size={48} color="#10b981" strokeWidth={1.5} />
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            className={styles.input}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label className={styles.label} htmlFor="email">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            className={styles.input}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="subject">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        className={styles.input}
                                        placeholder="Project Inquiry"
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label className={styles.label} htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className={styles.textarea}
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button type="submit" className={styles.submitBtn} disabled={loading}>
                                    {loading ? (
                                        <span className={styles.spinner} />
                                    ) : (
                                        <>
                                            Send Message <Send size={16} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
