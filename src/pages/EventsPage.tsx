import { useMeQuery } from "../features/auth/useAuth";

export default function ProfilePage() {
  const { data, isLoading, isError } = useMeQuery()

  if (isLoading) return <p>Chargement...</p>
  if (isError) return <p>Erreur de chargement</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profil</h1>
      {/* <p>Nom : {data.name}</p>
      <p>Email : {data.email}</p> */}
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}