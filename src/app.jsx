import React, { useState } from 'react';
import api from './api';
import SearchStatus from './components/searchStatus'
import Users from './components/users'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  let number = users.length;

  const handleDelete = (userId) => {
      const newUsers = users.filter(user => user._id !== userId)
      setUsers(newUsers)
  };

  const handleBookmark = (userId) => {
    const newUsers = users.map(user => {
      if (user._id === userId) {
        user.status ? user.status = false : user.status = true
      }
      return user
    })
    setUsers(newUsers)
  }

  return (
    <div>
      <SearchStatus
        number={number}
      />
      <Users
        onDelete={handleDelete}
        onBookmark={handleBookmark}
        users={users}
      />
    </div>
  );
}

export default App;
