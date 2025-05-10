'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import '../styles/globals.css';

export default function Home() {
  const [interests, setInterests] = useState([
    'Web Development',
    'UX/UI Design',
    'Product Design',
    'Graphic Design',
    'Cooking',
    'Traveling',
    'Watching TV'
  ]);

  const shuffleInterests = () => {
    setInterests([...interests].sort(() => Math.random() - 0.5));
  };

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="flex justify-center items-center gap-10">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Hello, World!
            </h1>
            <button
              className="tooltip text-lg font-bold  text-black-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onFocus={() => setShowTooltip(true)}
              onBlur={() => setShowTooltip(false)}
              aria-describedby="keyboard-access-tooltip"
            >
              Help
            </button>
          </div>
          {showTooltip && (
            <div
              id="keyboard-access-tooltip"
              className="mt-4 w-150 bg-white text-gray-800 rounded shadow-lg p-4 mx-auto"
            >
              <h2 className="text-lg font-bold mb-2">How to access the website using a keyboard?</h2>
              <ul className="list-disc pl-4 text-sm">
                <li>
                  Use <strong>Tab</strong> to navigate through interactive elements like links and buttons.
                </li>
                <li>
                  Press <strong>Enter</strong> or <strong>Space</strong> to activate a focused element.
                </li>
                <li>
                  Use <strong>Shift + Tab</strong> to navigate backward.
                </li>
                <li>
                  Focus indicators are visible to help you identify the currently focused element.
                </li>
              </ul>
              <p className="mt-2 text-xs">
                This website is fully accessible using keyboard follow instruction to access webiste using keyboard.
              </p>
            </div>
          )}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
            Welcome to my CSS 480 landing page. I'm excited to share about me.
          </p>
        </div>

        {/* About Section */}
        <div className="mb-20">
          <div className="about backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-20 relative inline-block ">
                  About Me
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-900 leading-relaxed mt-4 mb-6 ">
                  Hi, I’m Rinkal Faldu, a UX/UI designer, web designer, and product designer passionate about creating intuitive and meaningful digital experiences. 
                  I am currently a senior at the University of Washington Bothell, majoring in Computer Science and Software Engineering, and I am set to graduate in June 2025.
                  My goal is to blend technology with human-centered design to develop engaging and accessible user experiences. 
                  <br></br>
                  <br></br>
                  With a strong foundation in front-end development and UX principles, I enjoy translating complex problems into simple, elegant solutions.
                  I am actively seeking opportunities in UX/UI design, web design, and product design, where I can apply my skills and continue learning.
                  <br></br>
                  <br></br>
                  UX/UI designer dedicated to creating intuitive and engaging user experiences. 
                  I thrive on turning complex ideas into simple, user-friendly designs that resonate with users. 
                </p>
              </div>
              <div className="relative h-[400px] group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/Profile_Picture.jpg"
                    alt="my profile picture"
                    fill
                    className="object-cover transition-all duration-700 group-hover:brightness-110 w-1/2"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="interest backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10">
            <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
              My Interests
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </h2>
            <button
              onClick={shuffleInterests}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full
                       font-semibold tracking-wide transform hover:scale-105 hover:shadow-lg
                       transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 
                       focus:ring-blue-500 focus:ring-offset-2"
            >
              Shuffle Interests
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest}
                className="cards from-white to-gray-50/50 p-6 rounded-2xl shadow-md
                         transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                  <span className="text-lg text-gray-700 font-medium">{interest}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}