// app/admin/activities/page.tsx

import { query } from '@/lib/db';
import { Eye, MousePointer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default async function AdminActivitiesPage() {
    const activities = await query<{
        id: string;
        session_id: string;
        action_type: string;
        page_path: string;
        element: string | null;
        created_at: Date;
    }>(
        `SELECT id, session_id, action_type, page_path, element, created_at
     FROM user_activities 
     ORDER BY created_at DESC`
    );

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link
                    href="/admin"
                    className="text-gray-600 hover:text-[#12463D] transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold">All User Activities</h1>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    Total: {activities.length}
                </span>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left p-4 font-semibold text-gray-900">Timestamp</th>
                                <th className="text-left p-4 font-semibold text-gray-900">Session ID</th>
                                <th className="text-left p-4 font-semibold text-gray-900">Action</th>
                                <th className="text-left p-4 font-semibold text-gray-900">Target</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {activities.map(activity => (
                                <tr key={activity.id} className="hover:bg-gray-50">
                                    <td className="p-4 text-sm text-gray-500">
                                        {new Date(activity.created_at).toLocaleString()}
                                    </td>
                                    <td className="p-4 font-mono text-xs">
                                        {activity.session_id.substring(0, 12)}...
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {activity.action_type === 'page_view' ? (
                                                <Eye className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <MousePointer className="w-4 h-4 text-orange-500" />
                                            )}
                                            <span className="capitalize">{activity.action_type}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 font-mono text-sm">
                                        {activity.page_path || activity.element}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}