# Didimeet – Front-End

Bienvenue dans le front-end de **Didimeet**, une application de gestion d'événements développée avec **React**, **Vite**, **TypeScript** et **Tailwind CSS**.

---

## 🧠 Architecture utilisée

Ce projet suit une architecture **Feature-Based Modulaire**, inspirée du design pattern **Feature-Sliced Design (FSD)**. Elle permet une **scalabilité optimale**, une **séparation claire des responsabilités**, et une **organisation intuitive**.

### 🔧 Design Pattern résumé

> Chaque domaine fonctionnel (comme l’authentification, les événements, etc.) est isolé dans `features/`.
> 
> Les éléments globaux réutilisables sont placés dans `shared/`, les pages routables dans `pages/`, et les layouts dans `layouts/`.

### 📁 Structure clé du projet

```
📂 src/
├── features/         # Logique métier par domaine (ex: auth, events)
├── pages/            # Pages routables (via router)
├── layouts/          # Layouts globaux (Public, Dashboard, etc.)
├── router/           # Définition centralisée des routes
├── shared/           # Composants, services, hooks et types réutilisables
├── styles/           # Fichiers CSS globaux (Tailwind)
└── App.tsx           # Wrappers globaux : Router, QueryProvider, etc.
```

### 💡 Principes appliqués
- **Feature Isolation** : chaque domaine est autonome
- **Separation of Concerns** : logique métier, UI et routing bien séparés
- **Single Responsibility Principle** : chaque fichier/fonction a un but clair
- **Scalability Ready** : prêt pour une grosse app !

---

## 🚀 Stack technique
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query (React Query)](https://tanstack.com/query/latest)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router v6.4+](https://reactrouter.com/en/main)

---

## 📦 Installation
```bash
npm install
npm run dev
```

---

## 📁 Auteur
Projet codé à la main par @dylane — autodidacte passionné 🔥

---


// Doc TanStack Query
[TanStakQuery](https://dev.to/samuel_kinuthia/mastering-tanstack-query-a-comprehensive-guide-to-efficient-data-fetching-in-react-508p)
[doc](https://tanstack.com/query/latest/docs/framework/react/quick-start)



[Tailwind responsive guide](https://medium.com/@harutyunabgaryann/mastering-responsive-design-with-tailwind-css-essential-tips-and-tricks-5128da2b5df9)
[The API Contract](https://medium.com/@harutyunabgaryann/the-api-contract-bridging-the-gap-between-backend-and-frontend-development-3074effc642b)
[Layer vs Feature Architecture](https://dev.to/smotastic/layer-vs-feature-architecture-3cko)
[Feature-Based Architecture](https://medium.com/@harutyunabgaryann/building-scalable-react-applications-with-feature-based-architecture-41219d5549df)

[Zustand - dev.to](https://dev.to/jaredm/zustand-101-a-beginners-guide-to-global-state-management-in-react-lml)
[Zustand - medium](https://medium.com/@masoudit/the-complete-guide-to-using-zustand-as-a-state-manager-in-a-react-app-c63c88fe7729)
[Zustand - medium[tutorial]](https://medium.com/@joris.l/tutorial-zustand-a-simple-and-powerful-state-management-solution-9ad4d06d5334)


---

## 🚀 Si tu veux implémenter une *feature* comme "connexion" (login), voici l’ordre logique :

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

---

Tu veux que je t’aide à planifier la prochaine feature (signup ou meQuery) avec la même logique ?