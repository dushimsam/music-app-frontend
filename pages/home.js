import AlbumsSection from "../components/homepage/AlbumsSection"
import SongsSection from '../components/homepage/SongsSections';
import AdminDashboard from '../layouts/Dashboard';
import GenreSection from '../components/homepage/GenreSection';
import { useEffect, useState } from "react";
import { notifyError } from "../utils/alerts";
import { SongService } from "../services";

const App = () => {
    const [songs, setSongs] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const [totalSongs, setTotalSongs] = useState(0);

    
  const fetchSongs = async () => {
    try {
      const res = await SongService.get_all_paginated(currPage);
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
        <AdminDashboard isVerified={false}>
          <div className='container'>
            <div className='row justify-content-center pt-2'>
                <div className='col-12'>
                    <AlbumsSection/>
                </div>
            </div>

            <div className='row justify-content-center pt-5'>
                <div className='col-12'>
                    <GenreSection/>
                </div>
            </div>

            <div className='row justify-content-center pt-5'>
                <div className='col-12'>
                    <SongsSection status={"all"}  currPage={currPage} showTitle={true} totalSongs={totalSongs} setCurrPage={setCurrPage} songs={songs}/>
                </div>
            </div>
          </div>

        </AdminDashboard>
    );
};

export default App;