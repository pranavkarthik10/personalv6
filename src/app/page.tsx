"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';

export default function Home() {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </button>

      <div className="max-w-3xl mx-auto px-6 py-12 font-sans">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-8">Pranav Karthik</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <div className="space-y-2">
              <a href="mailto:pmruthyu@student.ubc.ca" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Mail size={20} />
                pmruthyu@student.ubc.ca
              </a>
              <a href="https://linkedin.com/in/pranav-karthik" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Linkedin size={20} />
                pranav-karthik
              </a>
              <a href="https://github.com/pranavkarthik10" className="flex items-center gap-2 text-blue-600 hover:text-blue-800">
                <Github size={20} />
                pranavkarthik10
              </a>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-lg leading-relaxed">
              Hey, I'm Pranav, a third year CS student at the University of British Columbia.
              I'm passionate about software engineering, primarily in building experiences for the web, mobile, and spatial interfaces.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-medium">STEP Intern, Google</div>
                <div className="text-gray-600">May 2024 - Aug 2024</div>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between">
                <div className="font-medium">Software Engineer Intern, DYNE</div>
                <div className="text-gray-600">May 2023 - Aug 2023</div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li className="text-lg">instru.lol</li>
              <li className="text-lg">share-character-ai</li>
              <li className="text-lg">textSQL</li>
              <li className="text-lg">ScholarSearch</li>
              <li className="text-lg">hft-systems-monitoring</li>
              <li className="text-lg">go-compiler</li>
            </ul>
          </section>
        </header>
      </div>
    </div>
  );
}
