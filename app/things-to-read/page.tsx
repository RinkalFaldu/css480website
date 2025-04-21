// filepath: c:\Users\rinka\Desktop\College classes\CSS 480\css480website\app\things-to-read\page.tsx


import Navbar from '../components/Navbar';
import '../../styles/globals.css';

export default function ThingsToRead() {
  const links = [
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
    { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
    { name: 'React Docs', url: 'https://reactjs.org/' },
    { name: 'Next.js Docs', url: 'https://nextjs.org/' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { name: 'JavaScript Info', url: 'https://javascript.info/' },
    { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
    { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/' },
    { name: 'CodePen', url: 'https://codepen.io/' },
    { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Things to Read</h1>
        <ul className="list-disc pl-6">
          {links.map((link, index) => (
            <li key={index} className="mb-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}