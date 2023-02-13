import toast, {Toaster} from 'react-hot-toast';
import AlbumsSection from "../components/homepage/AlbumsSection"
import SongsSection from '../components/homepage/SongsSections';
import AdminDashboard from '../layouts/Dashboard';
const notify = () => toast.success('Always at the bottom.', {
    position: "bottom-center"
});

const albumsSection = () =>{
    return(
        <div className='container'>
            
        </div>
    )
}

const App = () => {
    return (
        <AdminDashboard isVerified={true}>
          <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <AlbumsSection/>
                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-12'>
                    <SongsSection/>
                </div>
            </div>
          </div>

        </AdminDashboard>
    );
};

export default App;