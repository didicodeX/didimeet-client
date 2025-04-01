// layouts/PublicLayout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/components/Navbar'

export default function PublicLayout() {



  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </>
  )
}
