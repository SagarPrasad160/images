import React from "react";

function ImageLikes({ image }) {
  const likesPercentage = `${image.likes % 100}%`;
  const dislikesPercentage = `${100 - parseInt(image.likes % 100)}%`;
  return (
    <div>
      Likes / Dislikes (%)
      <div className="progress">
        <div
          style={{ width: likesPercentage }}
          className="progress-bar progress-bar-striped progress-bar-success"
        />
        <div
          style={{ width: dislikesPercentage }}
          className="progress-bar progress-bar-striped progress-bar-danger"
        />
      </div>
    </div>
  );
}

export default ImageLikes;
