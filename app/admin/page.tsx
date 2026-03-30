// app/admin/page.tsx

import { ViewsChart } from '@/components/ViewsChart';
import { query } from '@/lib/db';
import { Users, Eye, MousePointer, Activity, MapPin, Monitor, Smartphone, Tablet, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default async function AdminDashboard() {
  // Get last 30 days of page views grouped by date
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const pageViewsRaw = await query<{ created_at: Date }>(
    `SELECT created_at FROM page_views
     WHERE created_at >= $1
     ORDER BY created_at ASC`,
    [thirtyDaysAgo]
  );

  // Aggregate counts by day
  const viewsByDay: Record<string, number> = {};
  pageViewsRaw.forEach(view => {
    const day = view.created_at.toISOString().split('T')[0];
    viewsByDay[day] = (viewsByDay[day] || 0) + 1;
  });

  const chartData = Object.entries(viewsByDay).map(([date, count]) => ({ date, count }));
  chartData.sort((a, b) => a.date.localeCompare(b.date));

  // Get user statistics
  const userStats = await query<{
    total_users: number;
    active_today: number;
    active_this_week: number;
    avg_page_views_per_user: number;
    avg_clicks_per_user: number;
  }>(
    `SELECT 
       COUNT(*) as total_users,
       COUNT(CASE WHEN last_seen >= NOW() - INTERVAL '24 hours' THEN 1 END) as active_today,
       COUNT(CASE WHEN last_seen >= NOW() - INTERVAL '7 days' THEN 1 END) as active_this_week,
       COALESCE(AVG(page_views_count), 0) as avg_page_views_per_user,
       COALESCE(AVG(clicks_count), 0) as avg_clicks_per_user
     FROM user_sessions`
  );

  // Get device breakdown
  const deviceBreakdown = await query<{
    device_type: string;
    count: number;
  }>(
    `SELECT device_type, COUNT(*) as count 
     FROM user_sessions 
     WHERE device_type IS NOT NULL 
     GROUP BY device_type`
  );

  // Get top users by engagement
  const topUsers = await query<{
    session_id: string;
    page_views_count: number;
    clicks_count: number;
    country: string | null;
    device_type: string | null;
    last_seen: Date;
  }>(
    `SELECT 
     us.session_id,
     COALESCE(us.page_views_count, (SELECT COUNT(*) FROM page_views pv WHERE pv.session_id = us.session_id), 0) as page_views_count,
     COALESCE(us.clicks_count, (SELECT COUNT(*) FROM clicks c WHERE c.session_id = us.session_id), 0) as clicks_count,
     us.country,
     us.device_type,
     us.last_seen
   FROM user_sessions us
   ORDER BY page_views_count DESC 
   LIMIT 10`
  );

  // Get recent user activities - ONLY LAST 5
  const recentActivities = await query<{
    id: string;
    session_id: string;
    action_type: string;
    page_path: string;
    element: string | null;
    created_at: Date;
  }>(
    `SELECT id, session_id, action_type, page_path, element, created_at
     FROM user_activities 
     ORDER BY created_at DESC 
     LIMIT 5`
  );

  // Get total count of activities for "View More"
  const totalActivitiesCount = await query<{ count: number }>(
    `SELECT COUNT(*) as count FROM user_activities`
  );
  const totalActivities = totalActivitiesCount[0]?.count ?? 0;

  // Total counts from page_views and clicks tables
  // Total counts from page_views and clicks tables
  let totalViews = 0;
  let totalClicks = 0;

  try {
    const totalViewsResult = await query<{ count: number }>('SELECT COUNT(*) as count FROM page_views');
    totalViews = totalViewsResult[0]?.count ?? 0;
  } catch (error) {
    console.error('Error fetching page views:', error);
    // Fallback to user_activities
    const fallbackViews = await query<{ count: number }>(
      `SELECT COUNT(*) as count FROM user_activities WHERE action_type = 'page_view'`
    );
    totalViews = fallbackViews[0]?.count ?? 0;
  }

  try {
    const totalClicksResult = await query<{ count: number }>('SELECT COUNT(*) as count FROM clicks');
    totalClicks = totalClicksResult[0]?.count ?? 0;
  } catch (error) {
    console.error('Error fetching clicks:', error);
    // Fallback to user_activities
    const fallbackClicks = await query<{ count: number }>(
      `SELECT COUNT(*) as count FROM user_activities WHERE action_type = 'click'`
    );
    totalClicks = fallbackClicks[0]?.count ?? 0;
  }

  // Top pages
  const topPages = await query<{ path: string; count: number }>(
    `SELECT path, COUNT(*) as count FROM page_views
     GROUP BY path
     ORDER BY count DESC
     LIMIT 5`
  );

  // Top clicks
  const topClicks = await query<{ element: string; count: number }>(
    `SELECT element, COUNT(*) as count FROM clicks
     GROUP BY element
     ORDER BY count DESC
     LIMIT 5`
  );

  const stats = userStats[0];

  const getDeviceIcon = (device: string | null) => {
    switch (device) {
      case 'mobile': return <Smartphone className="w-4 h-4" />;
      case 'tablet': return <Tablet className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* User Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-500 text-sm font-medium">Total Users</h2>
            <Users className="h-5 w-5 text-[#12463D]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats?.total_users || 0}</p>
          <p className="text-sm text-gray-500 mt-2">
            {stats?.active_today || 0} active today
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-500 text-sm font-medium">Total Page Views</h2>
            <Eye className="h-5 w-5 text-[#12463D]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalViews}</p>
          <p className="text-sm text-gray-500 mt-2">
            Avg {Math.round(stats?.avg_page_views_per_user || 0)} per user
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-500 text-sm font-medium">Total Clicks</h2>
            <MousePointer className="h-5 w-5 text-[#12463D]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalClicks}</p>
          <p className="text-sm text-gray-500 mt-2">
            Avg {Math.round(stats?.avg_clicks_per_user || 0)} per user
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-500 text-sm font-medium">Active This Week</h2>
            <Activity className="h-5 w-5 text-[#12463D]" />
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats?.active_this_week || 0}</p>
          <p className="text-sm text-gray-500 mt-2">
            {Math.round((stats?.active_this_week || 0) / (stats?.total_users || 1) * 100)}% engagement rate
          </p>
        </div>
      </div>

      {/* Device Breakdown */}
      {deviceBreakdown.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">Device Breakdown</h2>
          <div className="grid grid-cols-3 gap-4">
            {deviceBreakdown.map(device => (
              <div key={device.device_type} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#12463D]/10 rounded-full mb-2">
                  {getDeviceIcon(device.device_type)}
                </div>
                <p className="text-2xl font-bold">{device.count}</p>
                <p className="text-sm text-gray-500 capitalize">{device.device_type || 'Unknown'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Page Views (Last 30 Days)</h2>
        <ViewsChart data={chartData} />
      </div>

      {/* Top Pages & Clicks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Pages</h2>
          <ul className="divide-y">
            {topPages.map(page => (
              <li key={page.path} className="py-2 flex justify-between">
                <span className="font-mono text-sm">{page.path || '/'}</span>
                <span className="bg-gray-100 px-2 py-1 rounded">{page.count}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Top Clicks</h2>
          <ul className="divide-y">
            {topClicks.map(click => (
              <li key={click.element} className="py-2 flex justify-between">
                <span>{click.element}</span>
                <span className="bg-gray-100 px-2 py-1 rounded">{click.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top Users by Engagement */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Most Engaged Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2">Session ID</th>
                <th className="text-left py-2">Location</th>
                <th className="text-left py-2">Device</th>
                <th className="text-right py-2">Page Views</th>
                <th className="text-right py-2">Clicks</th>
                <th className="text-right py-2">Last Active</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map(user => (
                <tr key={user.session_id} className="border-b border-gray-100">
                  <td className="py-2 font-mono text-xs">{user.session_id.substring(0, 8)}...</td>
                  <td className="py-2 flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                    {user.country || 'Unknown'}
                  </td>
                  <td className="py-2 capitalize">{user.device_type || 'Unknown'}</td>
                  <td className="py-2 text-right font-semibold">{user.page_views_count}</td>
                  <td className="py-2 text-right">{user.clicks_count}</td>
                  <td className="py-2 text-right text-sm">
                    {new Date(user.last_seen).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activities - Only 5 with View More button */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent User Activity</h2>
          {totalActivities > 5 && (
            <Link
              href="/admin/activities"
              className="text-sm text-[#12463D] hover:text-[#F28203] transition-colors flex items-center gap-1"
            >
              View All ({totalActivities})
              <ChevronDown className="w-4 h-4" />
            </Link>
          )}
        </div>
        <div className="space-y-3">
          {recentActivities.length > 0 ? (
            recentActivities.map(activity => (
              <div key={activity.id} className="flex items-start space-x-3 text-sm border-b border-gray-100 pb-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                  {activity.action_type === 'page_view' ? (
                    <Eye className="w-4 h-4 text-[#12463D]" />
                  ) : (
                    <MousePointer className="w-4 h-4 text-[#12463D]" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">
                    User <span className="font-mono">{activity.session_id.substring(0, 8)}...</span>
                  </p>
                  <p className="text-gray-600">
                    {activity.action_type === 'page_view' ? 'Viewed' : 'Clicked on'}
                    {' '}
                    <span className="font-mono">{activity.page_path || activity.element}</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(activity.created_at).toLocaleString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-8">No recent activities yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}