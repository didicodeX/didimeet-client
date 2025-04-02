import { useAuthStore } from "../features/auth"
// import { useLoaderStore } from "../shared/store/loader.store";

export default function DashboardPage() {

  const {user} = useAuthStore();
  console.log(user)

  // const { show, hide } = useLoaderStore()

  // show()
  
  // setTimeout(() => {
  //   hide()
  //   // action terminée
  // }, 2000)
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
<h2>Dashboard</h2>
    </div>
  )
}
