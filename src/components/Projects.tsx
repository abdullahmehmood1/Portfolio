'use client'

import styles from './Projects.module.css'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/data/projects'

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.bgAccent} aria-hidden="true" />
            <div className="container">

                {/* ── Header ── */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.sectionLabel}>
                        <span />Portfolio<span />
                    </div>
                    <h2 className={styles.title}>
                        Featured <span className={styles.titleAccent}>Projects</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Here are some of my recent works showcasing expertise in software engineering and cybersecurity.
                    </p>
                </motion.div>

                {/* ── Grid ── */}
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                        >
                            {/* Card Visual with live image */}
                            <div className={styles.cardVisual}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className={styles.projectImage}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                                />
                                {/* Gradient color overlay */}
                                <div
                                    className={styles.imageOverlay}
                                    style={{ background: project.gradient }}
                                />
                                {/* Project number */}
                                <span className={styles.projectNumber}>{project.number}</span>
                                {/* Link buttons */}
                                <div className={styles.cardLinks}>
                                    <a
                                        href={project.links.code}
                                        id={`project-code-${project.number}`}
                                        className={styles.iconBtn}
                                        aria-label={`View source code for ${project.title}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <Github size={16} />
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        id={`project-demo-${project.number}`}
                                        className={styles.iconBtn}
                                        aria-label={`View live demo for ${project.title}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <ExternalLink size={16} />
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
                                                background: `${project.accent}18`,
                                                color: project.accent,
                                                borderColor: `${project.accent}35`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href={project.links.demo}
                                    className={styles.cardCta}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                >
                                    View Project <ArrowUpRight size={15} />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* ── More CTA ── */}
                <motion.div
                    className={styles.moreCta}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="https://github.com/abdullahmehmood1"
                        id="view-all-github-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        <Github size={17} />
                        View All on GitHub
                    </a>
                </motion.div>

            </div>
        </section>
    )
}
