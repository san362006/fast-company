import React from "react";

const Bookmark = ({ status, onBookmark, id }) => {
  let markedClass = "";

  status
    ? (markedClass = "bi-bookmark-heart-fill")
    : (markedClass = "bi-bookmark");

  return (
    <div>
      <i className={`bi ${markedClass}`} onClick={() => onBookmark(id)}></i>
    </div>
  );
};

export default Bookmark;
