import { ConfirmModal } from "./ConfirmModal";
import { Loader } from "./loader";
import Modal from "./Modal";
import { Toast } from "./Toast";


export function UIProvider() {
  return (
    <>
      <Modal />
      <ConfirmModal />
      <Toast />
      <Loader />
    </>
  )
}
