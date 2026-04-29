export interface Project {
    title: string;
    desc: string;
    tags: string[];
    links: {
        demo: string;
        code: string;
    };
    gradient: string;
    accent: string;
    number: string;
}

export const projects: Project[] = [
    {
        title: 'Distributed Threat Intelligence System',
        desc: 'A real-time threat detection engine aggregating logs across multiple nodes. Utilizes machine learning to identify anomalies and potential zero-day exploits.',
        tags: ['Python', 'Elasticsearch', 'Docker', 'Machine Learning'],
        links: { demo: '#', code: '#' },
        gradient: 'linear-gradient(135deg, #00ffcc 0%, #0066ff 100%)',
        accent: '#00ffcc',
        number: '01',
    },
    {
        title: 'Interview Preparation App',
        desc: 'An AI-powered SaaS platform providing interactive coding practice, personalized learning roadmaps, and mock interviews.',
        tags: ['Next.js', 'Node.js', 'MongoDB', 'AI'],
        links: { demo: '#', code: '#' },
        gradient: 'linear-gradient(135deg, #8a2be2 0%, #0066ff 100%)',
        accent: '#8a2be2',
        number: '02',
    },
    {
        title: 'Zero-Trust Architecture Lab',
        desc: 'A simulated corporate network environment implementing strict zero-trust protocols, identity-aware proxies, and micro-segmentation.',
        tags: ['Terraform', 'Kubernetes', 'Go', 'Network Security'],
        links: { demo: '#', code: '#' },
        gradient: 'linear-gradient(135deg, #ff0055 0%, #8a2be2 100%)',
        accent: '#ff0055',
        number: '03',
    },
];
