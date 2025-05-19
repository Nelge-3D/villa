
import { ReactNode } from 'react'
import Link from 'next/link'
import { HomeIcon, UserIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-red-600 to-red-800 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold">Regab Admin</h1>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center gap-2 hover:text-gray-200">
            <HomeIcon className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/admin/users" className="flex items-center gap-2 hover:text-gray-200">
            <UserIcon className="w-5 h-5" /> Utilisateurs
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-2 hover:text-gray-200">
            <Cog8ToothIcon className="w-5 h-5" /> Paramètres
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
