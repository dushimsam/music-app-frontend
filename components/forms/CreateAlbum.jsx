import { useEffect, useState } from "react";
import Styles from "../../styles/components/Forms.module.scss";
import InputControl from "../Reusable/InputControl"; 
import { InputTextArea } from "../Reusable/InputControl";
import { isThisFormValid } from "../../utils/functions";
const AlbumFormInput = ({setIsFormValid,setValues,status,values}) => {
    
     const [valid, setValid] = useState({
        title: !!status,
        release_date: !!status,
        description: !!status
    });

    
    useEffect(() => {
        setIsFormValid(isThisFormValid(valid))
    }, [valid])

    const handleChangeV2 = (prop) => ({value, valid: validProp}) => {
        setValues({...values, [prop]: value});
        setValid(state => ({...state, [prop]: validProp}))
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mt-2">
                    <div className="form-group">
                        <InputControl handleChangeV2={handleChangeV2("title")} value={values.title} label="Title"
                                  type="text" validations="required|string|min:3"/>
                    </div>
                    <div className="form-group">
                    <InputControl handleChangeV2={handleChangeV2("release_date")} value={values.release_date} label="Release Date"
                                  type="date" />
                    </div>

                    <div className="form-group">
                    <InputTextArea handleChangeV2={handleChangeV2("description")} value={values.description} label="Description"
                                  type="text" validations="required|string|min:3"/>
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