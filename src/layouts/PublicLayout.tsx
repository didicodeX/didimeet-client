// layouts/PublicLayout.tsx
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/components/Navbar'
import { UIProvider } from '../shared/components/UIProvider'

export default function PublicLayout() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main><Outlet /></main>
      <UIProvider/>
      <footer>Footer</footer>
    </>
  )
}
