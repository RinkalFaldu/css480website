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
    { name: 'Backend Developer ROadmap', url: 'https://roadmap.sh/backend' },
    { name: 'Frontend Developer Roadmap', url: 'https://roadmap.sh/frontend' },
    { name: 'W3schools React Tutorial', url: 'https://www.w3schools.com/REACT/DEFAULT.ASP' },
    { name: 'UI Design Dos and Don’ts', url: 'https://developer.apple.com/design/tips/' },
    { name: 'UX/UI Standards', url: 'https://medium.com/@chathuswijekoonuom/ui-ux-standards-ddb4ad898ccc' },
 
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