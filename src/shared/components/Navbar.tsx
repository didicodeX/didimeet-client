// shared/components/Navbar.tsx
import { Link } from 'react-router-dom'


import { fetchMe, useAuth, useAuthStore, User } from '../../features/auth'
import { useQuery } from '@tanstack/react-query'

export default function Navbar() {
  const { user, setUser } = useAuthStore()
  const { logout } = useAuth()

  const { isLoading } = useQuery<User>({
    queryKey: ['me'],
    queryFn: async () => {
      const data = await fetchMe();
      setUser(data); // ← plus besoin de useEffect
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false
  })
  


  return (
    <header className="p-4 border-b flex items-center justify-between">
      <Link to="/" className="text-xl font-bold">
        Didimeet
      </Link>
      <nav className="space-x-4">
        {isLoading ? null : user ? (
          <button
            onClick={() => logout()}
            className="text-sm px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
          >
            Déconnexion
          </button>
        ) : (
          <>
            <Link to="/login" className="text-sm text-blue-600 hover:underline">
              Connexion
            </Link>
            <Link to="/signup" className="text-sm text-blue-600 hover:underline">
              Inscription
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
