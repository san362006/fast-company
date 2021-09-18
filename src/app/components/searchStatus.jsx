import React from "react"
import PropTypes from "prop-types"

const SearchStatus = ({ number }) => {
  const renderPhrase = (number) => {
    const phrase = ["человек тусанет", "человека тусанут", "человек тусанут"]

    return phrase[
      number % 10 === 1 && number % 100 !== 11
        ? 0
        : number % 10 >= 2 &&
          number % 10 <= 4 &&
          (number % 100 < 10 || number % 100 >= 20)
          ? 1
          : 2
    ]
  }

  const getUsersCountClasses = () => {
    let classes = "bg-"
    classes += number === 0 ? "danger" : "primary"

    return classes
  }

  const usersCount = () => {
    return number === 0
      ? "Никто с тобой не тусанет"
      : `${number} ${renderPhrase(number)} с тобой сегодня`
  }

  return (
    <h3>
      <span className={`badge ${getUsersCountClasses()}`}>{usersCount()}</span>
    </h3>
  )
}

SearchStatus.propTypes = {
  number: PropTypes.number.isRequired
}

export default SearchStatus
