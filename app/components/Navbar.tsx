// filepath: c:\Users\rinka\Desktop\College classes\CSS 480\css480website\app\components\Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          Home
        </Link>
        <Link href="/things-to-read" className="text-lg font-bold">
          Things to Read
        </Link>
      </div>
    </nav>
  );
}