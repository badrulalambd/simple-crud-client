import { use } from "react"

interface UserDetailProp {
  params: Promise<{ userid: string }>
}

const UserDetailPage = async ({ params }: UserDetailProp) => {
  const { userid } = await params
  const res = await fetch(`http://localhost:5000/users/${userid}`)
  const user = await res.json()
  return (
    <div className="container mx-auto max-w-lg px-4 py-10">
      <h2 className="mb-4 text-xl font-bold md:text-3xl">User Id: {userid}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserDetailPage
