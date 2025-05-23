import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="text-3xl font-extrabold text-blue-700 tracking-wide">MyWebsite</span>
        </div>
        <div className="navbar-links">
          <Link href="/" className="nav-link">
            <span className="tab">Home</span>
          </Link>
          <Link href="/things-to-read" className="nav-link">
            <span className="tab">Things to Read</span>
          </Link>
          <Link href="/focus-guide" className="nav-link">
            <span className="tab">Focus Guide</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}