// app/admin/page.tsx

import { prisma } from '@/lib/prisma';
import { LineChart } from '@/components/charts/LineChart';

export default async function AdminDashboard() {
  // Aggregate page views per day (last 30 days)
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const pageViews = await prisma.pageView.groupBy({
    by: ['createdAt'],
    where: { createdAt: { gte: thirtyDaysAgo } },
    _count: { id: true },
    orderBy: { createdAt: 'asc' },
  });

  const totalViews = await prisma.pageView.count();
  const totalClicks = await prisma.click.count();
  const topPages = await prisma.pageView.groupBy({
    by: ['path'],
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 5,
  });
  const topClicks = await prisma.click.groupBy({
    by: ['element'],
    _count: { id: true },
    orderBy: { _count: { id: 'desc' } },
    take: 5,
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <div>Total Page Views: {totalViews}</div>
      <div>Total Clicks: {totalClicks}</div>
      <h2>Page Views (Last 30 Days)</h2>
      <LineChart data={pageViews} />
      <h2>Top Pages</h2>
      <ul>{topPages.map(p => <li key={p.path}>{p.path}: {p._count.id}</li>)}</ul>
      <h2>Top Clicks</h2>
      <ul>{topClicks.map(c => <li key={c.element}>{c.element}: {c._count.id}</li>)}</ul>
    </div>
  );
}