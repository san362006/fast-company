import React, { useState, useEffect } from "react"
import api from "./api"
import Users from "./components/users"

function App() {
  const [users, setUsers] = useState()
  const status = false

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId)
    setUsers(newUsers)
  }

  const handleBookmark = (userId) => {
    const newUsers = users.map((user) => {
      if (user._id === userId) {
        user.status ? (user.status = false) : (user.status = true)
      }
      return user
    })
    setUsers(newUsers)
  }

  return (
    <div>
      <Users
        onDelete={handleDelete}
        onBookmark={handleBookmark}
        users={users}
        status={status}
      />
    </div>
  )
}

export default App
