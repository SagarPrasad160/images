import React from "react";

import ImageDetail from "./image_detail";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageDetail image={image} key={image.id} />;
  });
  return <ul className="media-list list-group">{renderedImages}</ul>;
}

export default ImageList;
