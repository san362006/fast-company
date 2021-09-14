import React from "react"
import PropTypes from "prop-types"

const Bookmark = ({ status, onBookmark, id }) => {
  let markedClass = ""

  status
    ? (markedClass = "bi-bookmark-heart-fill")
    : (markedClass = "bi-bookmark")

  return (
    <div>
      <i className={`bi ${markedClass}`} onClick={() => onBookmark(id)}></i>
    </div>
  )
}

Bookmark.propTypes = {
  status: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default Bookmark
