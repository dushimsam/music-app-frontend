// import styles from "../styles/components/CardDesc.module.scss";
import AdminDashboard from '../../layouts/Dashboard';
import GenreCoverPage from "../../components/Genre/GenreCoverPage";
import SongsSection from '../../components/homepage/SongsSections';


const GenrePage = () =>{
  return(
    <AdminDashboard isVerified={true}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <GenreCoverPage/>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-10 pt-4'>
          <SongsSection showTitle={false}/>
        </div>
      </div>
    </div>
    </AdminDashboard>
  )
}


export default GenrePage;