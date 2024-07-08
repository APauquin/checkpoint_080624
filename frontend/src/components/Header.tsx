import Link from 'next/link';

export default function Header() {
  return (
    <header className="header p-4 bg-blue-500 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Checkpoint: Frontend</h1>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/countries">Countries</Link>
        <Link href="/add_country">Add Country</Link>
      </nav>
    </header>
  );
}
