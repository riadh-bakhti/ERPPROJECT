import ReactStars from "react-rating-stars-component";
import React from "react";

const Stars = (props) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <ReactStars
      count={5}
      value={props.Valuee}
      size={24}
      edit= {false}
      activeColor="#ffd700"
    />
  );
};

export default Stars;