import React from "react";

import ImageLikes from "./image_likes";

function ImageDetail({ image }) {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src={image.urls.small} />
      </div>
      <div className="media-body">
        <h4 className="media-heading">{image.user.first_name}</h4>
        <div>{image.alt_description}</div>
        <ImageLikes image={image} />
      </div>
    </li>
  );
}

export default ImageDetail;
