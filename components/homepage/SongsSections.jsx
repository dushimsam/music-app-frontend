import styles from "../../styles/components/SongCard.module.scss";

const SongsSection = ({ showTitle }) => {
  return (
    <div className="container">
      {showTitle && (
        <div className="row justify-content-start">
          <div className="col-10">
            <h2 className="text-left">Recommendations</h2>
            <span className="text-dark">{`${100} songs`}</span>
          </div>
        </div>
      )}
      <div className="row justify-content-center">
        {/*Generate 10 items to be mapped on */}
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            className={`col-12 row justify-content-between my-2  ${styles.card}`}
            key={index}
          >
            <div className="col-1">{index + 1}</div>
            <div className="col-3">
              {/* <img
                src="/test/image1.jpeg"
                alt="album cover"
                className={`img-fluid bg-cover ${styles.image}`}
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z" fill="rgba(205,122,215,1)"/></svg>
            </div>
            <div className="col-5">
              <h6 className="">Song title</h6>
            </div>
            <div className="col-1">
              {`${Math.floor(Math.random() * 100)} min`}
            </div>
            <div className="col-1">
              <button className="btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4.5 10.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S6 12.825 6 12s-.675-1.5-1.5-1.5zm15 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5S21 12.825 21 12s-.675-1.5-1.5-1.5zm-7.5 0c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsSection;
