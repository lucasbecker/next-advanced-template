import Link from 'next/link';

export function Main({ title = 'Main' }: { title: string }) {
  return (
    <div>
      <h1>{title}</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
