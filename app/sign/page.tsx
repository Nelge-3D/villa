'use client'

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function SignPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()


  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      if (user.email) {
  router.push(`/welcome?user=${encodeURIComponent(user.email)}`)
} else {
  setError("Impossible de récupérer l'email utilisateur.")
}
    } catch (err: any) {
      setError("Connexion avec Google échouée")
    }
  }  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push(`/welcome?user=${encodeURIComponent(email)}`)
    } catch (err: any) {
      setError("Email ou mot de passe incorrect")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md w-full mx-auto p-6 bg-white rounded shadow"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Connexion</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 pr-10 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded transition duration-200"
        >
          Se connecter
        </button>

        <p className="text-sm text-center">
          Pas encore de compte ?{' '}
          <a href="/register" className="text-yellow-600 underline hover:text-yellow-800">
            Inscris-toi ici
          </a>
        </p>
        <button
  type="button"
  onClick={handleGoogleSignIn}
  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200"
>
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="... (logo svg de Google ici) ..." />
  </svg>
  Se connecter avec Google
</button>

      </form>
    </div>
  )
}
