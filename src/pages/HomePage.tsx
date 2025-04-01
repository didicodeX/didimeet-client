import { useAuthStore } from "../features/auth"

export default function HomePage(){
  const {user} = useAuthStore();
  console.log(user)
  return <h1>Home Page</h1>
}