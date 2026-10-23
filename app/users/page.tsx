import UsersCard from "@/components/UsersCard"
import React from "react"

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/users`)
  const usersData = await res.json()

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="mb-5 text-lg font-bold md:text-3xl">
        Number of users: {usersData.length}
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {usersData.map((user) => (
          <UsersCard key={user._id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default UsersPage
