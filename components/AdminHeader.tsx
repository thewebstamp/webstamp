// components/AdminHeader.tsx

'use client'

import { Bell, Search, User } from 'lucide-react'
import { useState } from 'react'

export function AdminHeader() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-gray-600 hover:text-primary transition">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}