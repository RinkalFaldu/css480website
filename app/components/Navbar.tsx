import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar text-white p-4">
      <div className="container mx-auto flex flex-row items-center justify-center gap-x-4 ">
        <Link href="/" className="text-lg font-bold hover:underline border-4 border-purple-500 m-8 p-8">
          Home
        </Link>
        <Link href="/things-to-read" className="text-lg font-bold hover:underline border-4 border-purple-500 m-8 p-8">
          Things to Read
        </Link>
      </div>
    </nav>
  );
}