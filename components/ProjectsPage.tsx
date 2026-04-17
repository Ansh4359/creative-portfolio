"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DynamicNavigation } from './DynamicNavigation';
import { PageVisitsFooter } from './PageVisitsFooter';
import { PixelCard } from './PixelCard';

interface ProjectsPageProps {
    onNavigate: (view: string) => void;
    toggleTheme: () => void;
    isDark: boolean;
}

const PROJECTS = [
   {
        title: "Portfolio Builder",
        desc: "A web-based platform that generates personalized developer portfolios from user input and automatically deploys them to a custom Vercel domain, eliminating the need for manual setup.",
        tags: ["React", "Node.js", "Vercel", "Automation"],
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link : "https://portfolio-builder.ansh-dev.me"
    },
    {
        title: "AI Chat Application",
        desc: "A cross-platform AI chat application for Android and web, enabling real-time conversations with intelligent responses. Currently being developed with a focus on seamless UI and scalable architecture.",
        tags: ["React Native", "Expo", "Web", "AI"],
        image: "https://picsum.photos/seed/aichat/600/400",
        link : ""
    }
];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, toggleTheme, isDark }) => {
    const triggerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <DynamicNavigation
                triggerRef={triggerRef}
                toggleTheme={toggleTheme}
                isDark={isDark}
                onNavigate={onNavigate}
                currentView="projects"
                enableIsland={false}
            />

            <main className="px-6 pt-32 md:pt-48 pb-4 relative z-10 max-w-5xl mx-auto min-h-screen">

                {/* Header */}
                <div ref={triggerRef} className="mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-8xl font-serif text-gray-900 dark:text-white mb-6"
                    >
                        Selected Work
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-light"
                    >
                        A collection of projects exploring the intersection of design, engineering, and data science.
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mb-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
                            className="group cursor-pointer"
                            onClick={() => project.link && window.open(project.link, '_blank')}
                        >
                            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl bg-gray-100 dark:bg-[#111]">
                                <PixelCard
                                    image={project.image}
                                    title={project.title}
                                    desc={project.desc}
                                    tags={project.tags}
                                    className="w-full h-full"
                                />

                                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-30 pointer-events-none">
                                    <ArrowUpRight className="w-5 h-5 text-black dark:text-white" href='https://google.com'/>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-2xl font-serif font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        {project.tags.slice(0, 2).map(tag => (
                                            <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-gray-400 border border-gray-200 dark:border-white/10 px-2 py-1 rounded-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-2">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <PageVisitsFooter />

            </main>
        </>
    );
};