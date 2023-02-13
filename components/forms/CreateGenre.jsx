import Styles from "../../styles/components/Forms.module.scss";


const GenreFormInput = ({handleChange,values}) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-2">
                    <div className="form-group">
                        <label htmlFor="type" style={Styles.label}>Type</label>
                        <input className="form-control" id="type" onChange={handleChange("type")}
                               value={values.title}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenreFormInput