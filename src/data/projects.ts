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
    image: string;
}

export const projects: Project[] = [
    {
        title: 'Distributed Threat Intelligence System',
        desc: 'A real-time threat detection engine aggregating logs across multiple nodes. Utilizes machine learning to identify anomalies and potential zero-day exploits.',
        tags: ['Python', 'Elasticsearch', 'Docker', 'Machine Learning'],
        links: { demo: 'https://github.com/abdullahmehmood1', code: 'https://github.com/abdullahmehmood1' },
        gradient: 'linear-gradient(135deg, rgba(0,255,204,0.55) 0%, rgba(0,102,255,0.55) 100%)',
        accent: '#00ffcc',
        number: '01',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=450&fit=crop',
    },
    {
        title: 'Interview Preparation App',
        desc: 'An AI-powered SaaS platform providing interactive coding practice, personalized learning roadmaps, and mock interviews to accelerate career growth.',
        tags: ['Next.js', 'Node.js', 'MongoDB', 'AI'],
        links: { demo: 'https://github.com/abdullahmehmood1', code: 'https://github.com/abdullahmehmood1' },
        gradient: 'linear-gradient(135deg, rgba(138,43,226,0.55) 0%, rgba(0,102,255,0.55) 100%)',
        accent: '#a855f7',
        number: '02',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop',
    },
    {
        title: 'Zero-Trust Architecture Lab',
        desc: 'A simulated corporate network environment implementing strict zero-trust protocols, identity-aware proxies, and micro-segmentation for enterprise security.',
        tags: ['Terraform', 'Kubernetes', 'Go', 'Network Security'],
        links: { demo: 'https://github.com/abdullahmehmood1', code: 'https://github.com/abdullahmehmood1' },
        gradient: 'linear-gradient(135deg, rgba(255,0,85,0.55) 0%, rgba(138,43,226,0.55) 100%)',
        accent: '#f43f5e',
        number: '03',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=450&fit=crop',
    },
    {
        title: 'Diet-Pro App',
        desc: 'A comprehensive diet and nutrition tracking application designed to help users achieve their health goals.',
        tags: ['React', 'Next.js', 'Health', 'Nutrition'],
        links: { demo: 'https://diet-pro-two.vercel.app/', code: 'https://github.com/abdullahmehmood1' },
        gradient: 'linear-gradient(135deg, rgba(34,197,94,0.55) 0%, rgba(59,130,246,0.55) 100%)',
        accent: '#22c55e',
        number: '04',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop',
    },
    {
        title: 'Phishing Detection Website',
        desc: 'A machine learning powered cybersecurity platform to detect and prevent phishing attacks in real-time.',
        tags: ['Python', 'Machine Learning', 'Cybersecurity', 'React'],
        links: { demo: 'https://phishing-website-detection-app.vercel.app/', code: 'https://github.com/abdullahmehmood1' },
        gradient: 'linear-gradient(135deg, rgba(239,68,68,0.55) 0%, rgba(249,115,22,0.55) 100%)',
        accent: '#ef4444',
        number: '05',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=450&fit=crop',
    },
];
