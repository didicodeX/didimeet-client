import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

const PublicLayout = lazy(() => import("../layouts/PublicLayout"))
// const HomePage = lazy(() => import('../pages/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const SignUpPage = lazy(() => import('../pages/SignUpPage'))

const EventsPage = lazy(() => import("../pages/EventsPage"))


export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />, 
    children: [
      // { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignUpPage /> },
      {  index: true, element: <EventsPage /> },
    ],
  },
])
