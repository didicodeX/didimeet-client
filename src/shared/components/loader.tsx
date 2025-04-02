import { useLoaderStore } from "../store/loader.store"


export function Loader() {
  const { isLoading } = useLoaderStore()

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  )
}
