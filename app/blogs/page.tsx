'use client';

import { BlogPage } from '../../components/BlogPage';
import { useTheme } from '../providers';
import { useRouter } from 'next/navigation';

export default function Blogs() {
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

    if (view === 'blogs' && articleId) {
      router.push(`/blogs/${articleId}`);
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
    <BlogPage
      onNavigate={handleNavigate}
      toggleTheme={toggleTheme}
      isDark={isDark}
      activeArticleId={undefined}
    />
  );
}