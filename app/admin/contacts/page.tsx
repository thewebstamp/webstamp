// app/admin/contacts/page.tsx

import { query } from '@/lib/db';
import Link from 'next/link';
import { Mail, Phone, Building, Calendar, CheckCircle, XCircle, Clock, Eye } from 'lucide-react';

export default async function AdminContactsPage() {
  // Get all contact submissions
  const submissions = await query<{
    id: string;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service_interest: string;
    message: string;
    status: string;
    created_at: Date;
  }>(
    `SELECT * FROM contact_submissions 
     ORDER BY created_at DESC`
  );

  // Count unread submissions
  const unreadCount = submissions.filter(s => s.status === 'new').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Clock className="w-3 h-3 mr-1" />
            New
          </span>
        );
      case 'read':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <Eye className="w-3 h-3 mr-1" />
            Read
          </span>
        );
      case 'replied':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Replied
          </span>
        );
      case 'archived':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <XCircle className="w-3 h-3 mr-1" />
            Archived
          </span>
        );
      default:
        return null;
    }
  };

  const getServiceLabel = (service: string) => {
    const labels: Record<string, string> = {
      'lead-generation': 'Lead Generation',
      'automation': 'Marketing Automation',
      'website': 'Website Design & SEO',
      'full-service': 'Full Service Package',
      'other': 'Other',
    };
    return labels[service] || service;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Submissions</h1>
          {unreadCount > 0 && (
            <p className="text-sm text-blue-600 mt-1">
              {unreadCount} new submission{unreadCount !== 1 ? 's' : ''} to review
            </p>
          )}
        </div>
        <div className="text-sm text-gray-500">
          Total: {submissions.length} submissions
        </div>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No submissions yet</h3>
          <p className="text-gray-600">Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {submissions.map((submission) => (
            <div key={submission.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-3">
                      <h2 className="text-xl font-semibold text-gray-900">{submission.name}</h2>
                      {submission.status === 'new' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Unread
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-1" />
                        <a href={`mailto:${submission.email}`} className="hover:text-primary">
                          {submission.email}
                        </a>
                      </span>
                      {submission.phone && (
                        <span className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          <a href={`tel:${submission.phone}`} className="hover:text-primary">
                            {submission.phone}
                          </a>
                        </span>
                      )}
                      {submission.company && (
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {submission.company}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {getStatusBadge(submission.status)}
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(submission.created_at).toLocaleDateString()} at{' '}
                      {new Date(submission.created_at).toLocaleTimeString()}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">Service Interest:</span>
                  <span className="ml-2 text-sm text-gray-600">
                    {getServiceLabel(submission.service_interest)}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Message:</h3>
                  <p className="text-gray-600 whitespace-pre-wrap bg-gray-50 p-4 rounded-md">
                    {submission.message}
                  </p>
                </div>

                <div className="flex space-x-3 pt-4 border-t border-gray-200">
                  {submission.status === 'new' && (
                    <button
                      onClick={async () => {
                        await fetch(`/api/admin/contacts/${submission.id}`, {
                          method: 'PATCH',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ status: 'read' }),
                        });
                        window.location.reload();
                      }}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Mark as Read
                    </button>
                  )}
                  {submission.status === 'read' && (
                    <button
                      onClick={async () => {
                        await fetch(`/api/admin/contacts/${submission.id}`, {
                          method: 'PATCH',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ status: 'replied' }),
                        });
                        window.location.reload();
                      }}
                      className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200"
                    >
                      Mark as Replied
                    </button>
                  )}
                  <button
                    onClick={() => {
                      window.location.href = `mailto:${submission.email}?subject=Re: Your inquiry about ${getServiceLabel(submission.service_interest)}`;
                    }}
                    className="px-3 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90"
                  >
                    Reply via Email
                  </button>
                  {submission.status !== 'archived' && (
                    <button
                      onClick={async () => {
                        await fetch(`/api/admin/contacts/${submission.id}`, {
                          method: 'PATCH',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ status: 'archived' }),
                        });
                        window.location.reload();
                      }}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      Archive
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}