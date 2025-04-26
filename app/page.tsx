import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <Link href="/new" className="text-blue-500">New Post</Link>
      <ul className="mt-4 space-y-2">
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/${post.slug}`} className="text-blue-700 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}