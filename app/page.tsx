'use client';

import { useState, useEffect } from 'react';
import { PortfolioHome } from '../components/PortfolioHome';
import { Preloader } from '../components/Preloader';
import { useTheme } from './providers';
import { useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Failsafe: auto-hide preloader after 5 seconds
  useEffect(() => {
    const failsafeTimer = setTimeout(() => {
      if (isLoading) {
        console.log("Preloader failsafe triggered");
        setIsLoading(false);
      }
    }, 5000);

    return () => clearTimeout(failsafeTimer);
  }, [isLoading]);

  const handleNavigate = (view: string, articleId?: string) => {
    if (view === 'contact') {
      // Scroll to contact section on home page
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    // Navigate to other routes
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
    <div className="relative">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => {
            console.log("Preloader completed");
            setIsLoading(false);
          }} />
        )}
      </AnimatePresence>

      <PortfolioHome
        onNavigate={handleNavigate}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </div>
  );
}