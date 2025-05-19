'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAuth } from 'firebase/auth'
import {auth} from '@/lib/firebase'
import { ADMIN_EMAILS } from '@/lib/admins'
import DashboardLayout from '@/app/Components/DashboardLayout'
import StatCard from '@/app/Components/StatCard'
import ActivityChart from '@/app/Components/ActivityChart'
import RecentUsersTable from '@/app/Components/RecentUsersTable'

export default function AdminPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user && ADMIN_EMAILS.includes(user.email ?? '')) {
      setAllowed(true)
    } else {
      router.push('/')
    }
    setLoading(false)
  })

  return () => unsubscribe()
}, [router])

  if (loading) return <p>Chargement...</p>
  if (!allowed) return null

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">Bienvenue sur votre espace d’administration</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard title="Utilisateurs" value="1 209" icon="users" />
        <StatCard title="Revenus" value="12 450€" icon="revenue" />
        <StatCard title="Messages" value="234" icon="messages" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityChart />
        <RecentUsersTable />
      </div>
    </DashboardLayout>
  )
}
