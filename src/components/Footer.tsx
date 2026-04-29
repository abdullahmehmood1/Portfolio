'use client'

import { useState } from 'react'
import styles from './Footer.module.css'
import { ArrowRight, Facebook, Twitter, Dribbble, Github } from 'lucide-react'

export default function Footer() {
    const [subscribed, setSubscribed] = useState(false)
    const [email, setEmail] = useState('')

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setSubscribed(true)
            setEmail('')
            setTimeout(() => setSubscribed(false), 3000)
        }
    }

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.row}>
                    {/* About Me */}
                    <div className={styles.col}>
                        <h4 className={styles.title}>About Me</h4>
                        <p className={styles.text}>
                            We have tested a number of registry fix and clean utilities and present our top 3 list on our site for your convenience.
                        </p>
                        <p className={styles.copyright}>
                            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with <span className={styles.heart}>♡</span> by Abdullah
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.col}>
                        <h4 className={styles.title}>Newsletter</h4>
                        <p className={styles.text}>
                            {subscribed ? 'Thank you for subscribing!' : 'Stay updated with our latest trends'}
                        </p>
                        <form className={styles.form} onSubmit={handleSubscribe}>
                            <input 
                                type="email" 
                                placeholder="Enter Email Address" 
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className={styles.btn}>
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Follow Me */}
                    <div className={styles.col}>
                        <h4 className={styles.title}>Follow Me</h4>
                        <p className={styles.text}>
                            Let us be social
                        </p>
                        <div className={styles.socials}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Facebook size={16} /></a>
                            <a href="https://twitter.com/abdullahmehmood" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Twitter size={16} /></a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Dribbble size={16} /></a>
                            <a href="https://github.com/abdullahmehmood1" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Github size={16} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
