// layouts/PublicLayout.tsx
import { Outlet } from 'react-router-dom'
import { useAuthStore } from '../features/auth/auth.store'
import { useAuth } from '../features/auth/useAuth';

export default function PublicLayout() {

  const {user} = useAuthStore();
  const { logout } = useAuth();
  console.log(user)


  return (
    <>
      <header>
        <a href="/login">login</a>
        <br />
        <button onClick={() => logout()}>logout</button>
      </header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </>
  )
}
