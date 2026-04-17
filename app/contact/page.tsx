'use client';

import { ContactPage } from '../../components/ContactPage';
import { useTheme } from '../providers';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();

  const handleNavigate = (view: string) => {
    if (view === 'contact') {
      // Already on contact page, maybe scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <ContactPage
      onNavigate={handleNavigate}
      toggleTheme={toggleTheme}
      isDark={isDark}
    />
  );
}