import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { router } from './router'
import "./styles/index.css"

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="p-4 text-center">Made By didicode...</div>}>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </Suspense>
    </QueryClientProvider>
  )
}
