import React, { useState } from "react"
import User from "./user"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import PropTypes from "prop-types"

const Users = ({ users: allUsers, ...rest }) => {
  const itemsCount = allUsers.length
  const usersPerPage = 4
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const users = paginate(allUsers, currentPage, usersPerPage)

  return (
    <>
      {itemsCount > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User key={user._id} {...rest} {...user} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={itemsCount}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
