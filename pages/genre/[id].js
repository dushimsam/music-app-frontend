// import styles from "../styles/components/CardDesc.module.scss";
import AdminDashboard from "../../layouts/Dashboard";
import GenreCoverPage from "../../components/Genre/GenreCoverPage";
import SongsSection from "../../components/homepage/SongsSections";
import { notifyError } from "../../utils/alerts";
import { GenreService } from "../../services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GenrePage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [item, setItem] = useState({ type: "...", songs: 0 });

  const getGenre = () => {
    (async function () {
      try {
        const res = await GenreService.get_by_id(id);
        setItem(res.data);
      } catch (e) {
        notifyError(e.response?.data?.message);
      }
    })();
  };

  useEffect(() => {
    id && getGenre();
  }, [id]);

  return (
    <AdminDashboard isVerified={true}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <GenreCoverPage item={item}/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 pt-4">
            <SongsSection showTitle={false} />
          </div>
        </div>
      </div>
    </AdminDashboard>
  );
};

export default GenrePage;
