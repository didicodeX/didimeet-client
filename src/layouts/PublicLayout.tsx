// layouts/PublicLayout.tsx
import { Outlet } from 'react-router-dom'
export default function PublicLayout() {
  return (
    <>
      <header>Navbar publique</header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </>
  )
}
