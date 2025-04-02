
// src/shared/components/ConfirmModal.tsx
import { useConfirmModalStore } from "../store/confirmModal"

export function ConfirmModal() {
  const { isOpen, title, message, onConfirm, close } = useConfirmModalStore()

  if (!isOpen) return null

  return (
    <div
      onClick={close}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative animate-fadeIn"
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{message}</p>

        <div className="flex justify-end gap-2">
          <button
            onClick={close}
            className="px-4 py-2 text-sm rounded bg-gray-200 hover:bg-gray-300"
          >
            Annuler
          </button>
          <button
            onClick={() => {
              onConfirm()
              close()
            }}
            className="px-4 py-2 text-sm rounded bg-red-600 text-white hover:bg-red-700"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  )
}
