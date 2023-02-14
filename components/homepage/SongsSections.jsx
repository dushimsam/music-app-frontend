import { useEffect, useState } from "react";
import { SongService } from "../../services";
import styles from "../../styles/components/SongCard.module.scss";
import Styles from "../../styles/components/GenreCard.module.scss";
import { notifyError } from "../../utils/alerts";

const SongsSection = ({ showTitle, setCurrPage, currPage, totalSongs, songs, status  }) => {

  return (
    <div className="container-fluid">
      {showTitle && (
        <div className="row justify-content-start">
          <div className="col-10">
            <h2 className="text-left">Recommendations</h2>
            <span className="text-dark">{`${totalSongs} songs`}</span>
          </div>
        </div>
      )}
      <div className="row justify-content-between py-3">
        <div className="col-1">#</div>
       <div className="col-3">Title</div>
       {status === "all" || status === "genre" &&  <div className="col-3">Album</div>}
       {status === "all" || status === "album" &&  <div className="col-3">Genre</div>}
        <div className="col-1">Length</div>
        <div className="col-1">Action</div>
      </div>

      {
        songs.length == 0 && (
          <div className="row justify-content-center pt-5">
            <div className="col-5">No songs available under this category</div>
          </div>
        )
      }

      {songs.map((song, index) => (
        <div
          className={`row justify-content-between my-2  ${styles.card}`}
          key={index}
        >
          <div className="col-1">{index + 1}</div>
          <div className="col-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="64"
              height="64"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM10.622 8.415a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666l-4.88-3.252z"
                fill="rgba(205,122,215,1)"
              />
            </svg>
          </div>
          <div className="col-2">
            <h6 className="">{song.title}</h6>
          </div>
          {status == "all" || status == "genre" && 
          <div className="col-2">
            <h6 className="">{song.album.title}</h6>
          </div>}
          {status == "all" || status == "album" &&  <div className="col-2">
            <h6 className="">{song.genre.type}</h6>
          </div>}
          <div className="col-1">{`${song.length} min`}</div>
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
      {songs.length < totalSongs && (
        <div className="row justify-content-center">
          <div className="col-3">
            <div className={` py-3 ${Styles.viewMore}`}>
              <p
                className="font-weight-bold"
                on
                onClick={() => setCurrPage(currPage + 1)}
              >
                See more
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
      )}
    </div>
  );
};

export default SongsSection;
