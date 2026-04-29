'use client'

import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

import { projects } from '@/data/projects'

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
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
                    <h2 className={styles.title}>
                        Featured <span className={styles.titleAccent}>Portfolio</span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -6 }}
                            onClick={() => project.links.demo !== '#' && window.open(project.links.demo, '_blank')}
                            style={{ cursor: project.links.demo !== '#' ? 'pointer' : 'default' }}
                        >
                            {/* Card Top Visual */}
                            <div className={styles.cardVisual} style={{ background: project.gradient }}>
                                <span className={styles.projectNumber}>{project.number}</span>
                                <div className={styles.cardLinks}>
                                    <a
                                        href={project.links.code}
                                        className={styles.iconBtn}
                                        aria-label="View source code"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={18} />
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        className={styles.iconBtn}
                                        aria-label="View live demo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.desc}</p>

                                {/* Tags */}
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className={styles.tag}
                                            style={{
                                                background: `${project.accent}15`,
                                                color: project.accent,
                                                borderColor: `${project.accent}30`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Link */}
                                <a href={project.links.demo} className={styles.cardCta} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                                    View Project <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* More Projects CTA */}
                <motion.div
                    className={styles.moreCta}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="https://github.com/abdullahmehmood1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.moreBtn}
                    >
                        <Github size={18} />
                        View All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
