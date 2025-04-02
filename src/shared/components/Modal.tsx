import { useModalStore } from "../store/modal.store";

export default function Modal() {
  const { isOpen, content, closeModal } = useModalStore()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={closeModal}>
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl relative animate-fadeIn"  onClick={(e) => e.stopPropagation()}>
        {content}

        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
