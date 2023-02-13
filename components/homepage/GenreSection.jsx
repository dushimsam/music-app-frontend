import Styles from "../../styles/components/GenreCard.module.scss";

let CARDS_DETAILS = [
  { image: "/test/image1.jpeg", title: "1", status: "" },
  { image: "/test/image2.jpg", title: "2", status: "" },
  { image: "/test/image4.jpeg", title: "", status: "new" },
  { image: "/test/image3.jpg", title: "3", status: "" },
  { image: "/test/image4.jpeg", title: "4", status: "" },
  { image: "/test/image4.jpeg", title: "4", status: "" },
];

const GenreSection = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <h3>Genres</h3>
        </div>
      </div>
      <div className="row justify-content-start">
        {CARDS_DETAILS.map((card, index) =>
          card.status == "new" ? (
            <div className="col-2">
              <div className={`${Styles.newGenreCard}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    fill="rgba(149,164,166,1)"
                  />
                </svg>
              </div>
            </div>
          ) : (
            <div className="col-4 my-2" key={index}>
              <div className={`${Styles.card} py-2`}>
                <span className="mr-5">title</span>
                <button className={`btn p-3  ${Styles.cardBtn}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                      fill="rgba(255,255,255,1)"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )
        )}
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <div className={` py-3 ${Styles.viewMore}`}>
            <p className="font-weight-bold">
              View more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenreSection;
