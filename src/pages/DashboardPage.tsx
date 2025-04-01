import { useAuthStore } from "../features/auth"

export default function DashboardPage() {

  const {user} = useAuthStore();
  console.log(user)
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
<h2>Dashboard</h2>
    </div>
  )
}
