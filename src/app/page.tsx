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
    <div className={`min-h-screen transition-all duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'}`}>
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-purple-500' : 'bg-blue-400'}`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 ${theme === 'dark' ? 'bg-pink-500' : 'bg-indigo-400'}`}></div>
      </div>

      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 p-3 rounded-full backdrop-blur-md bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300 z-50 shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={20} className="text-slate-800" /> : <Sun size={20} className="text-yellow-300" />}
      </button>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        <header className="mb-20">
          {/* Name with black text */}
          <h1 className={`text-6xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Pranav Karthik
          </h1>
          
          {/* Role tags */}
          <div className="flex flex-wrap gap-4 mb-12">
            <span className={`px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${theme === 'dark' ? 'bg-purple-500/20 text-purple-200 border-purple-400/30' : 'bg-blue-500/20 text-blue-700 border-blue-400/30'}`}>
              software engineer
            </span>
            <span className={`px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${theme === 'dark' ? 'bg-pink-500/20 text-pink-200 border-pink-400/30' : 'bg-indigo-500/20 text-indigo-700 border-indigo-400/30'}`}>
              builder
            </span>
            <span className={`px-6 py-2 rounded-full text-sm font-medium backdrop-blur-md border ${theme === 'dark' ? 'bg-blue-500/20 text-blue-200 border-blue-400/30' : 'bg-purple-500/20 text-purple-700 border-purple-400/30'}`}>
              tinkerer
            </span>
          </div>

          {/* About section */}
          <p className={`text-xl md:text-2xl leading-relaxed max-w-3xl mb-16 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
            Hey, I&apos;m Pranav, a fourth year CS student at the University of British Columbia.
            I&apos;m passionate about building experiences for the web, mobile, and spatial interfaces.
          </p>

          {/* Contact links */}
          <div className="flex flex-wrap gap-6 mb-20">
            <a 
              href="mailto:pmruthyu@student.ubc.ca" 
              className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
            >
              <Mail size={20} />
              <span className="font-medium">email</span>
            </a>
            <a 
              href="https://linkedin.com/in/pranav-karthik" 
              className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
            >
              <Linkedin size={20} />
              <span className="font-medium">linkedin</span>
            </a>
            <a 
              href="https://github.com/pranavkarthik10" 
              className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${theme === 'dark' ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/5 text-slate-700 border-slate-200 hover:bg-black/10'}`}
            >
              <Github size={20} />
              <span className="font-medium">github</span>
            </a>
          </div>
        </header>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className={`text-3xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
            Experience
          </h2>
          <div className="space-y-8">
            {/* <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-2xl font-semibold mb-2 sm:mb-0">Software Engineering Intern</h3>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'}`}>
                  Sep 2025 - Present
                </span>
              </div>
              <p className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>Vercel</p>
            </div> */}
            <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-2xl font-semibold mb-2 sm:mb-0">Software Engineering Intern</h3>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'}`}>
                  May 2025 - Aug 2025
                </span>
              </div>
              <p className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-600'}`}>Google</p>
            </div>
            <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-2xl font-semibold mb-2 sm:mb-0">STEP Intern</h3>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-purple-500/20 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>
                  May 2024 - Aug 2024
                </span>
              </div>
              <p className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>Google</p>
            </div>
            <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                <h3 className="text-2xl font-semibold mb-2 sm:mb-0">App Development Intern</h3>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-pink-500/20 text-pink-200' : 'bg-pink-100 text-pink-700'}`}>
                  May 2023 - Aug 2023
                </span>
              </div>
              <p className={`text-lg font-medium mb-2 ${theme === 'dark' ? 'text-pink-300' : 'text-pink-600'}`}>DYNE</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className={`text-3xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] group ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Interconnected</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-blue-500/20 text-blue-200' : 'bg-blue-100 text-blue-700'}`}>
                  Feb 2024
                </span>
              </div>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>SwiftUI, CoreGraphics, Combine</p>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                Interactive Swift application introducing graph theory algorithms with custom physics simulation and drag-and-drop graph playground.
              </p>
            </div>

            <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] group ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">TravoAI</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-green-500/20 text-green-200' : 'bg-green-100 text-green-700'}`}>
                  June 2023
                </span>
              </div>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-600'}`}>React.js, Node.js, OpenAI API</p>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                Full-stack web application for AI-generated travel plans with streaming responses and modern React UI.
              </p>
            </div>

            <div className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-300 hover:scale-[1.02] group ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-white/20 hover:bg-white/70'}`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Trackr</h3>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-orange-500/20 text-orange-200' : 'bg-orange-100 text-orange-700'}`}>
                  Oct 2019
                </span>
              </div>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-orange-300' : 'text-orange-600'}`}>UIKit, CoreData, SiriKit</p>
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                iOS app for assignment management with tens of thousands of App Store downloads and Siri integration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}