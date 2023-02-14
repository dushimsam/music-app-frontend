// import styles from "../styles/components/CardDesc.module.scss";
import AdminDashboard from "../../layouts/Dashboard";
import SongsSection from "../../components/homepage/SongsSections";
import AlbumCoverPage from "../../components/Album/AlbumCoverPage";
import { AlbumService } from "../../services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { notifyError } from "../../utils/alerts";

const AlbumPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [item, setItem] = useState({ type: "...", songs: 0 });

  const getAlbum = () => {
    (async function () {
      try {
        const res = await AlbumService.get_by_id(id);
        setItem(res.data);
      } catch (e) {
        notifyError(e.response?.data?.message);
      }
    })();
  };

  useEffect(() => {
    id && getAlbum();
  }, [id]);

  // integration for songs list
  const [songs, setSongs] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [totalSongs, setTotalSongs] = useState(0);

  const fetchSongs = async () => {
    try {
      const res = await AlbumService.get_songs_by_id_paginated(id, currPage);
      setSongs([...songs, ...res.data.data]);
      setTotalSongs(res.data.total);
    } catch (e) {
      notifyError(e.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [currPage]);

  return (
    <AdminDashboard isVerified={true}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <AlbumCoverPage item={item} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 pt-4">
            <SongsSection
              showTitle={false}
              currPage={currPage}
              status={"album"}
              totalSongs={totalSongs}
              setCurrPage={setCurrPage}
              songs={songs}
            />
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default AlbumPage;
