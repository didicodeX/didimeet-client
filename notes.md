
---
### 1️⃣ `auth.interface.ts`
📄 **Définir les types & payloads**
> Tu déclares ici :
```ts
export type LoginPayload = {
  email: string
  password: string
}

export type AuthResponse = {
  token: string
  user: User
}
```
✅ Tu poses la base solide de ton domaine.

---

### 2️⃣ `auth.service.ts`
📡 **Créer les appels API**
> Exemple :

```ts
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const res = await axios.post('/login', payload)
  return res.data
}
```

✅ Tu relies le front à ton backend.

---

### 3️⃣ `auth.store.ts`
🧠 **Créer le store Zustand (état global)**
> Ici tu vas stocker le `user`, `token`, etc.

```ts
export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))
```

✅ C’est ton "cache" local persistant.

---

### 4️⃣ `useAuth.ts`
🔁 **Créer ton hook métier**
> Il relie **le service** + **le store** + **les toasts** + **les redirections**

```ts
export function useAuth() {
  const setUser = useAuthStore((s) => s.setUser)
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setUser(data.user)
      toast.success("Connexion réussie")
      navigate("/dashboard")
    }
  })

  return { login: mutation.mutate, isLoading: mutation.isPending }
}
```

✅ Tu centralises toute la logique d’auth ici.

---

### 5️⃣ `AuthForm.tsx`
📋 **Construire le composant formulaire**
> Utilise `useAuth`, `react-hook-form`, `zod`, etc.

✅ Tu fais le rendu visuel + appels à ton hook.

---

### 6️⃣ `index.ts`
📦 **Rassembler tous les exports**
```ts
export * from './auth.interface'
export * from './auth.service'
export * from './auth.store'
export * from './useAuth'
```

✅ Tu rends le domaine réutilisable en une ligne d'import.

---

## 🧠 Résumé : l’ordre idéal de travail

| Étape | Fichier | Rôle |
|------|--------|------|
| 1 | `auth.interface.ts` | Définir les types |
| 2 | `auth.service.ts` | Connexion à l’API |
| 3 | `auth.store.ts` | Stockage local de l’état |
| 4 | `useAuth.ts` | Logique métier (mutation + store) |
| 5 | `AuthForm.tsx` | Formulaire d’UI |
| 6 | `index.ts` | Exports globaux |
