import {
    Code2, Terminal, Database, Cloud, Layout,
    GitBranch, Smartphone, Server, Globe, Layers, Cpu, Box, LucideIcon
} from 'lucide-react'

export interface Skill {
    name: string;
    icon: LucideIcon;
    level: number;
}

export interface SkillCategory {
    category: string;
    color: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        category: 'Frontend',
        color: '#6366f1',
        skills: [
            { name: 'React', icon: Layout, level: 95 },
            { name: 'Next.js', icon: Globe, level: 92 },
            { name: 'TypeScript', icon: Code2, level: 90 },
            { name: 'CSS / Tailwind', icon: Layers, level: 88 },
        ]
    },
    {
        category: 'Backend',
        color: '#06b6d4',
        skills: [
            { name: 'Node.js', icon: Server, level: 85 },
            { name: 'REST / GraphQL', icon: Terminal, level: 82 },
            { name: 'SQL / NoSQL', icon: Database, level: 80 },
            { name: 'Python', icon: Cpu, level: 72 },
        ]
    },
    {
        category: 'Tools & Cloud',
        color: '#10b981',
        skills: [
            { name: 'Git & GitHub', icon: GitBranch, level: 92 },
            { name: 'AWS / Cloud', icon: Cloud, level: 70 },
            { name: 'Docker', icon: Box, level: 68 },
            { name: 'React Native', icon: Smartphone, level: 65 },
        ]
    }
];
