import Styles from "../../styles/components/Forms.module.scss";


const AlbumFormInput = () => {
     const values = {
        title: "",
        release_date: "",
        description: ""

     }
    const handleChange = (value) => {
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-2">
                    <div className="form-group">
                        <label htmlFor="firstName" style={Styles.label}>Title</label>
                        <input className="form-control" id="title" onChange={handleChange("title")}
                               value={values.title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="release_date" className="mt-3">Release Date</label>
                        <input className="form-control" id="release_date" value={values.release_date}
                               onChange={handleChange("release_date")}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description" className="mt-3">Description</label>
                        <textarea className="form-control" id="description" value={values.description}
                               onChange={handleChange("description")}/>
                    </div>
                    <div className="form-group">
                        <input type="file" id="myFile" name="filename" hidden={true}/>
                       <button className="btn-dark px-3 py-2">UPLOAD COVER IMAGE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AlbumFormInput