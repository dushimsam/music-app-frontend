// import Styles from "../styles/components/Forms.module.scss";


// const FormInput = () => {
//      const values = {
//         title: "",
//         release_date: "",
//         description: ""

//      }
//     const handleChange = (value) => {
//     }
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-12 col-md-6 mt-2">
//                     <div className="form-group">
//                         <label htmlFor="firstName" style={Styles.label}>Title</label>
//                         <input className="form-control" id="title" onChange={handleChange("title")}
//                                value={values.title}/>
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="release_date" className="mt-3">Release Date</label>
//                         <input className="form-control" id="release_date" value={values.release_date}
//                                onChange={handleChange("release_date")}/>
//                     </div>

//                     <div className="form-group">
//                         <label htmlFor="description" className="mt-3">Description</label>
//                         <textarea className="form-control" id="description" value={values.description}
//                                onChange={handleChange("description")}/>
//                     </div>
//                     <div className="form-group">
//                         <input type="file" id="myFile" name="filename" hidden={true}/>
//                        <button className="btn-dark px-3 py-2">UPLOAD COVER IMAGE</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export default FormInput



import Styles from "../styles/components/GenreCard.module.scss";

const GenreSection = () => {
  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-4">
          <h2>Genres</h2>
        </div>
      </div>
      <div className="row justify-content-start">
        {Array.from({ length: 10 }).map((_, index) => (
          <div className="col-4 my-2">
            <div className={`${Styles.card} py-2`}>
                  <span className="mr-5">title</span>
                  <button className={`btn p-3  ${Styles.cardBtn}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="rgba(255,255,255,1)"/></svg>               
                </button>
            </div>
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        <div className="col-3">
          <div className={` py-3 ${Styles.viewMore}`} >
             
           <p className="font-weight-bold">View more
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg>
           </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default GenreSection;