'use client';

import { CommandPalette } from './CommandPalette';
import { useTheme } from '../app/providers';
import { useRouter } from 'next/navigation';

export function ClientCommandPalette() {
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();

  const handleNavigate = (view: string, articleId?: string) => {
    if (view === 'contact') {
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
        path = articleId ? `/blogs/${articleId}` : '/blogs';
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
    <CommandPalette
      onNavigate={handleNavigate}
      toggleTheme={toggleTheme}
      isDark={isDark}
    />
  );
}