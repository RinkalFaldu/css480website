'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [interests, setInterests] = useState([
    'Web Development',
    'Artificial Intelligence',
    'Photography',
    'Hiking',
    'Reading Science Fiction'
  ]);

  const shuffleInterests = () => {
    setInterests([...interests].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Hello, World!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to my CSS 480 landing page. I'm excited to share my journey in computer science with you.
          </p>
        </div>

        {/* About Section */}
        <div className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block">
                  About Me
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate computer science student at the University of Washington, 
                  driven by curiosity and creativity. I believe in the power of technology 
                  to solve real-world problems and make a positive impact on society.
                </p>
              </div>
              <div className="relative h-[400px] group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/Profile_Picture.jpg"
                    alt="Coding workspace"
                    fill
                    className="object-cover transition-all duration-500 group-hover:brightness-110"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
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
                className="bg-gradient-to-br from-white to-gray-50/50 p-6 rounded-2xl shadow-md
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