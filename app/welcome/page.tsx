'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { ADMIN_EMAILS } from '@/lib/admins'

export default function WelcomePage() {
  const router = useRouter()
  const params = useSearchParams()
  const userEmail = params.get('user')
  const emailNormalized = (userEmail || '').trim().toLowerCase()
  

  useEffect(() => {
  console.log("userEmail récupéré :", userEmail)
  const timeout = setTimeout(() => {
    if (userEmail && ADMIN_EMAILS.includes(userEmail.toLowerCase())) {
      router.push('/admin')
    } else {
      router.push('/')
    }
  }, 3000)

  return () => clearTimeout(timeout)
}, [router, userEmail])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
      <div className="bg-white px-8 py-6 rounded-2xl shadow-2xl text-center max-w-sm animate-fade-in-down">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500 w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">Connexion réussie</h2>
        {userEmail && (
          <p className="text-gray-700 text-sm">
            Bienvenue, <span className="font-medium">{userEmail}</span> 👋
          </p>
        )}
        <p className="text-gray-500 mt-3 text-sm italic">Redirection en cours...</p>
      </div>
    </div>
  )
}
