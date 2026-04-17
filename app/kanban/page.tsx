'use client';

import { KanbanBoard } from '../../components/KanbanBoard';
import { useRouter } from 'next/navigation';

export default function Kanban() {
  const router = useRouter();

  const handleNavigate = (view: string) => {
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
    <KanbanBoard onNavigate={handleNavigate} />
  );
}