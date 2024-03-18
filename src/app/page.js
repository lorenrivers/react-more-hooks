import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Main Page</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/use-context">Use Context Hook</Link>
      </nav>
    </div>
  );
}
