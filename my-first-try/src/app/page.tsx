import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <nav>
        <Link href="/blogs">Go to Blog</Link>
      </nav>
    </div>
  );
}
