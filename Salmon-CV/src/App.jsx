import { Sidebar } from './components/Sidebar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { useState, useEffect, useRef } from 'react'

import './App.css'

function App() {

  const [activeSection, setActiveSection] = useState('about');
  const isFirtsRender = useRef(true);


  useEffect(() => {

    const sections = document.querySelectorAll("section");
    console.log(sections)
    const observer = new IntersectionObserver(
      (entries) => {
        if (isFirtsRender.current) {
          isFirtsRender.current = false;
          return;
        }


        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveSection(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect()
    }
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
