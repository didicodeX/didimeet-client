import { logout, useAuthStore } from "../features/auth";
import CircleButton from "../shared/components/CircleButton";
import { useConfirmModalStore } from "../shared/store/confirmModal";
import { useModalStore } from "../shared/store/modal.store";
import { useToastStore } from "../shared/store/toast.store";

export default function TestPage() {
  const { user } = useAuthStore();
  console.log(user);

  const { openModal, closeModal } = useModalStore();

  const { open } = useConfirmModalStore();
  const { show } = useToastStore();
  


  return (
    <>
      <button
        onClick={() =>
          openModal(
            <div>
              <h2 className="text-lg font-bold ">Tu confirmes ?</h2>
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
      <h1 className="">Du titre</h1>
      <button onClick={() => show("action reussie","success")}>toast</button>

      <CircleButton>
          <img src="/icons/search.svg" alt="" />
        </CircleButton>
        <button onClick={() => logout()} >deonnexion</button>
    </>
  );
}
