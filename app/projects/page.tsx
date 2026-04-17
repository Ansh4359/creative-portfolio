'use client';

import { ProjectsPage } from '../../components/ProjectsPage';
import { useTheme } from '../providers';
import { useRouter } from 'next/navigation';

export default function Projects() {
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();

  const handleNavigate = (view: string) => {
    if (view === 'contact') {
      // Scroll to contact section on home page
      router.push('/');
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    let path = '/';
    switch (view) {
      case 'projects':
        path = '/projects';
        break;
      case 'blogs':
        path = '/blogs';
        break;
      case 'kanban':
        path = '/kanban';
        break;
      case 'experiments':
        path = '/experiments';
        break;
      default:
        path = '/';
    }
    router.push(path);
  };

  return (
    <ProjectsPage
      onNavigate={handleNavigate}
      toggleTheme={toggleTheme}
      isDark={isDark}
    />
  );
}