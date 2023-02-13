import Styles from "../../styles/components/Forms.module.scss";

const SongFormInput = ({ values, handleChange }) => {
  const albums = [
    { _id: 1, name: "album1" },
    { _id: 2, name: "album2" },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mt-2">
          <div className="form-group">
            <label htmlFor="title" style={Styles.label}>
              Title
            </label>
            <input
              className="form-control"
              id="title"
              onChange={handleChange("title")}
              value={values.title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="length" className="mt-3">
              Length
            </label>
            <input
              className="form-control"
              id="length"
              value={values.length}
              onChange={handleChange("length")}
            />
          </div>

          <div className="form-group">
            <select
              label="Select Album"
              onChange={handleChange("album_id")}
              value={values.album_id}
              validations="required|string"
            >
              <option value=""></option>
              {albums.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <select
              label="Select Genre"
              onChange={handleChange("genre_id")}
              value={values.genre_id}
              validations="required|string"
            >
              <option value=""></option>
              {albums.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongFormInput;
