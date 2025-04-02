import { useAuthStore } from "../features/auth";
import { useConfirmModalStore } from "../shared/store/confirmModal";
import { useModalStore } from "../shared/store/modal.store";
import { useToastStore } from "../shared/store/toast.store";

export default function HomePage() {
  const { user } = useAuthStore();
  console.log(user);

  const { openModal, closeModal } = useModalStore();

  const { open } = useConfirmModalStore();
  const { show } = useToastStore();
  


  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={() =>
          openModal(
            <div>
              <h2 className="text-lg font-bold">Tu confirmes ?</h2>
              <p>Action irréversible.</p>
              <button
                onClick={() => {
                  // logique
                  closeModal();
                }}
                className="mt-4 bg-red-600 text-white rounded px-4 py-2"
              >
                Supprimer
              </button>
            </div>
          )
        }
      >
        Supprimer un truc
        <br />
        <br />
      </button>
      <button
        onClick={() =>
          open({
            title: "Supprimer cet événement ?",
            message: "Cette action est irréversible.",
            onConfirm: () => {
              console.log("Événement supprimé !");
              // ici tu mets l'action réelle : mutation, etc.
            },
          })
        }
      >
        Supprimer
      </button>
      <br />
      <br />
      <button onClick={() => show("action reussie","success")}>toast</button>
    </div>
  );
}
