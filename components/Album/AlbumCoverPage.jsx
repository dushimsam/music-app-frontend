import Popup from "reactjs-popup";
import ModalWrapper from "../../components/Reusable/modals/ModalWrapper";
import SongFormInput from "../forms/CreateSong";

const styles = {
  header: {
    height: "400px",
    width: "100%",
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(/images/soundtrack.jpg)`,
    backgroundSize: "cover",
  },
  categories: {
    marginTop: "-100px",
  },
  image: {
    width: "15em",
    height: "15em",
  },
  title: {
    fontSize: "3em",
  },
};

const AlbumCoverPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 rounded" style={styles.header}>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-3 pt-4">
                <img
                  src="/test/image2.jpg"
                  alt="cover-image"
                  className="img-thumbnail"
                  style={styles.image}
                />
              </div>
              <div className="col-5 pt-4">
                <h1
                  className="text-light font-weight-bold mt-5"
                  style={styles.title}
                >{`Country music`}</h1>
                <p className="text-light">{`There are 100 songs under this category`}</p>
                <button className="btn-dark px-3 py-2 rounded">
                  {" "}
                  EDIT DETAILS{" "}
                </button>
              </div>
            </div>
            <div className="row justify-content-between pt-5">
              <div className="col-4">
                <Popup
                  trigger={
                      <button
                        className="btn px-3 py-3 mr-2"
                        style={{ backgroundColor: "#3643c7" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z" />
                          <path
                            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                            fill="rgba(255,255,255,1)"
                          />
                        </svg>
                      </button>
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <ModalWrapper
                      title={"Add new Song"}
                      close={close}
                      btnActionText={"CREATE"}
                      content={<SongFormInput />}
                    />
                  )}
                </Popup>
                <button
                  className="btn px-2 py-2"
                  style={{ backgroundColor: "white" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 8h16v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8zm2 2v10h12V10H6zm3 2h2v6H9v-6zm4 0h2v6h-2v-6zM7 5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h5v2H2V5h5zm2-1v1h6V4H9z" />
                  </svg>
                </button>{" "}
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCoverPage;
