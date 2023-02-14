import React, { useEffect, useState } from "react";
import AlubmCardStyles from "../../styles/components/AlbumCard.module.scss";
import AlbumFormInput from "../forms/CreateAlbum";
import Popup from "reactjs-popup";
import ModalWrapper from "../../components/Reusable/modals/ModalWrapper";
import { AlbumService, CloudinaryService } from "../../services";
import { notifyError, notifySuccess } from "../../utils/alerts";
import Styles from "../../styles/components/GenreCard.module.scss";
import Router from "next/router";


const AlbumSection = () => {
  const [values, setValues] = useState({
    title: "",
    release_date: "",
    description: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgFile, setImgFile] = useState(null);
  const [albums, setAlbums] = useState([
    {
      id: "new",
      type: "",
      created_at: "",
      updated_at: "",
    },
  ]);

  const Create = async () => {
    try {
      if(!imgFile) return notifyError("Please upload a cover image");
      setLoading(true);
      let res = await AlbumService.create(values);
      
      const cloudinaryService = new CloudinaryService(imgFile);
      const uploadRes = await cloudinaryService.upload();
      res = await AlbumService.uploadPicture(
        res.data.model.id,
        uploadRes.data.secure_url
      );
      notifySuccess(res.data.message);
      setAlbums([...albums, res.data.model]);
    } catch (e) {
      notifyError(e.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUploadPicture = (files) => {
    setImgFile(files[0]);
  };

  const [currPage, setCurrPage] = useState(1);
  const [totalAlbums, setTotalAlbums] = useState(0);

  const fetchAlbums = async () => {
    try {
      const res = await AlbumService.get_all_paginated(currPage);
      setTotalAlbums(res.data.total);
      setAlbums([...albums, ...res.data.data]);
    } catch (e) {
      notifyError(e.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, [currPage]);

  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <h2>Available Albums</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="row">
          {albums.map((card, index) =>
            card.id == "new" ? (
              <div className="col-2">
                <Popup
                  trigger={
                    <div className={`${AlubmCardStyles.newAlbumCard}`}>
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
                  }
                  modal
                  nested
                >
                  {(close) => (
                    <ModalWrapper
                      title={"Add new Album"}
                      loading={loading}
                      close={close}
                      disable={isFormValid}
                      callFun={Create}
                      btnActionText={"CREATE"}
                      content={
                        <AlbumFormInput
                          imgFile={imgFile}
                          handleUploadPicture={handleUploadPicture}
                          setIsFormValid={setIsFormValid}
                          setValues={setValues}
                          values={values}
                        />
                      }
                    />
                  )}
                </Popup>
              </div>
            ) : (
              <div className="col-2" key={index}>
                <div onClick={() => Router.push("album/" + card.id)}>
                  <img 
                    src={card.cover_image_url}
                    alt="album cover"
                    className={`img-fluid bg-cover ${AlubmCardStyles.image}`}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{card.title}</h6>
                    <p className="card-text"> {card.release_date} </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {albums.length < totalAlbums && (
        <div className="row justify-content-center">
          <div className="col-3">
            <div className={` py-3 ${Styles.viewMore}`}>
              <p
                className="font-weight-bold"
                on
                onClick={() => setCurrPage(currPage + 1)}
              >
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
      )}
    </div>
  );
};

export default AlbumSection;
