// app/[slug]/page.tsx
import { prisma } from '@/lib/prisma';

interface Props {
  // Aquí viene como Promise<{ slug: string }>
  params: Promise<{ slug: string }>;
  // Si necesitas searchParams:
  searchParams: Promise<Record<string, string>>;
}

export default async function PostPage(props: Props) {
  // 1) Esperamos a que Next.js nos entregue el objeto params
  const { slug } = await props.params;

  // 2) Ahora sí usamos el slug para la consulta
  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) return <div>Post not found</div>;

  return (
    <article>
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p>{post.content}</p>
    </article>
  );
}
