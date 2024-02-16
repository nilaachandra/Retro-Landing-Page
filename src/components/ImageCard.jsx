import React from "react";

const ImageCard = (props) => {
  return (
    <div className="w-full h-full">
      <img
        src={props.image}
        alt="image"
        className="w-full h-full object-center"
      />
    </div>
  );
};

export default ImageCard;
