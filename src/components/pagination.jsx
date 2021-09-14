import React from "react"
import _ from "lodash"
import PropTypes from "prop-types"

const Pagination = ({
  itemsCount,
  usersPerPage,
  currentPage,
  onPageChange
}) => {
  const pageCount = Math.ceil(itemsCount / usersPerPage)
  const pages = _.range(1, pageCount + 1)

  if (pageCount === 1) return null

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={"page-item " + (page === currentPage ? "active" : "")}
            key={page}
          >
            <button className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default Pagination
