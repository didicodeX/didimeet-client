import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const PublicLayout = lazy(() => import("../layouts/PublicLayout"))
const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const SignUpPage = lazy(() => import('../pages/SignUpPage'))
const DashboardPage = lazy(() => import('../pages/DashboardPage'))
import { Suspense } from 'react'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />, 
    children: [
      { index: true, element: <HomePage /> },
      // { path: 'login', element: <LoginPage /> },
      {
        path: 'login',
        element: (
          <Suspense fallback={<div>Chargement...</div>}>
            <LoginPage />
          </Suspense>
        )
      },
      { path: 'signup', element: <SignUpPage /> },
      { path: 'dashboard', element: <DashboardPage /> },
    ],
  },
  
]) 
