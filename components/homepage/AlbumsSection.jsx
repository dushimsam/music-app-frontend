import React from "react";
import AlubmCardStyles from "../../styles/components/AlbumCard.module.scss";

let CARDS_DETAILS = [
  { image: "/test/image1.jpeg", title: "1" },
  { image: "/test/image2.jpg", title: "2" },
  { image: "/test/image3.jpg", title: "3" },
  { image: "/test/image4.jpeg", title: "4" },
];

const Slideshow = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <h2>Available Albums</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="row">
          {CARDS_DETAILS.map((card, index) => (
            <div className="col-3" key={index}>
              <div>
                <img
                  src={card.image}
                  alt="album cover"
                  className={`img-fluid bg-cover ${AlubmCardStyles.image}`}
                />
                <div className="card-body">
                  <h6 className="card-title">Card title</h6>
                  <p className="card-text"> 12th January 2011 </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-3">
          <p>See more</p>
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                fill="rgba(149,164,166,1)"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
