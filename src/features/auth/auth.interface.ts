import { z } from 'zod'

// Ce que l’utilisateur envoie pour se connecter
export const loginSchema = z.object({
  email: z.string().email({ message: 'Email invalide' }),
  password: z.string().min(6, { message: 'Minimum 6 caractères' })
})

export type LoginFormValues = z.infer<typeof loginSchema>


// Ce que le backend renvoie après connexion
export interface AuthResponse {
  user: User
  accessToken: string
  message: string
}

// Le type d’un utilisateur connecté
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'user'
}

