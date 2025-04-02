// src/shared/components/Toast.tsx
import { useToastStore } from "../store/toast.store"
import clsx from "clsx"

export function Toast() {
  const { isVisible, message, type } = useToastStore()

  if (!isVisible) return null

  return (
    <div
      className={clsx(
        "fixed bottom-5 right-5 z-50 px-4 py-3 rounded shadow-lg text-white animate-fadeIn",
        {
          "bg-green-600": type === "success",
          "bg-red-600": type === "error",
          "bg-blue-600": type === "info",
        }
      )}
    >
      {message}
    </div>
  )
}
