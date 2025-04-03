import { useMutation } from '@tanstack/react-query'
import { login, logout, signup } from './auth.service'
import { useAuthStore } from './auth.store'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const useAuth = () => {
  const navigate = useNavigate()
  const setUser = useAuthStore((state) => state.setUser)

  const signupMutation = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      setUser(data.user)
      toast.success('Inscription réussie')
      navigate('/dashboard')
    },
    onError: () => toast.error("Erreur d'inscription")
  })

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user)
      toast.success('Connexion réussie !')
      navigate('/dashboard')
    },
    onError: () => {
      toast.error('Identifiants incorrects')
    },
  })

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setUser(null) // 🧼 Vide l'état global
      toast.success('Déconnexion réussie')
      navigate('/login')
    },
    onError: () => {
      toast.error('Erreur pendant la déconnexion')
    },
  })

  return {
    signup: signupMutation.mutate,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading: loginMutation.isPending,
    isLoggingOut: logoutMutation.isPending,
  }
}
