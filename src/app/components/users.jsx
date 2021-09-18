import React, { useState, useEffect } from "react"
import _ from "lodash"
import User from "./user"
import api from "../api"
import { paginate } from "../utils/paginate"
import SearchStatus from "./searchStatus"
import Pagination from "./pagination"
import PropTypes from "prop-types"
import GroupList from "./groupList"

const Users = ({ users: allUsers, ...rest }) => {
  const usersPerPage = 2
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfession] = useState()
  const [selectedProf, setSelectedProf] = useState()

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const filteredUsers = selectedProf
    ? allUsers.filter((user) => _.isEqual(user.profession, selectedProf))
    : allUsers

  const itemsCount = filteredUsers
    ? filteredUsers.length
    : 0

  const users = paginate(filteredUsers, currentPage, usersPerPage)

  const clearFilter = () => {
    setSelectedProf()
  }

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить
          </button>
        </div>
      )}

      <div className="d-flex flex-column">
        <SearchStatus number={itemsCount} />
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
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={itemsCount}
            usersPerPage={usersPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Users
