import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [activeSection, setActiveSection] = useState('about');


  useEffect(() => {

    const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    },
    {
      threshold: 0.3,
    }
  );

  sections.forEach(section => observer.observe(section));

  return () => observer.disconnect();
  }, []);



  return (
    <>
      <div className='flex flex-col lg:flex-row min-h-scree'>
        <Sidebar activeSection={activeSection} />
        <main className='flex-1 p-6 lg:p-12 max-w-300 mx-auto w-full'>
          <div className='flex flex-col gap-10 '>
            <About />
            <Experience />
            <Skills />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
