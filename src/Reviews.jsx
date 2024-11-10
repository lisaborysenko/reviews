import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const Reviews = ({ reviewsData }) => {
  const [index, setIndex] = useState(0);

  const onArrowLeftHandler = () => {
    if (index === 0) {
      setIndex(3);
    } else setIndex(index - 1);
  };

  const onArrowRightHandler = () => {
    if (index === 3) {
      setIndex(0);
    } else setIndex(index + 1);
  };

  const onSurpriseMeHandler = () => {
    setIndex(Math.floor(Math.random() * 4));
  };
  console.log(index);

  return (
    <div>
      <div className="imgCont">
        <img
          src={reviewsData[index]?.image}
          className="img"
          alt="review image"
        />
      </div>
      <h3 className="name">{reviewsData[index].name}</h3>
      <h5 className="job">{reviewsData[index].job}</h5>
      <p className="text">{reviewsData[index].text}</p>
      <div className="SlArrow">
        <SlArrowLeft onClick={onArrowLeftHandler} className="SlArrow" />
        <SlArrowRight onClick={onArrowRightHandler} className="SlArrow" />
      </div>
      <div className="surpriseCont">
        <button onClick={onSurpriseMeHandler} className="surpriseBtn">
          Surprise me!
        </button>
      </div>
    </div>
  );
};
export default Reviews;
