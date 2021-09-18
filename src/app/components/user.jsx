import React from "react"
import Quality from "./quality"
import Bookmark from "./bookmark"
import PropTypes from "prop-types"

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDelete,
  status,
  onBookmark
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{`${rate} / 5`}</td>
      <td>
        <Bookmark status={status} onBookmark={onBookmark} id={_id} />
      </td>
      <td>
        <button
          onClick={() => onDelete(_id)}
          type="button"
          className="btn btn-danger"
        >
          Удалить
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
  onBookmark: PropTypes.func.isRequired
}

export default User