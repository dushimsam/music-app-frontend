import Styles from "../styles/components/Forms.module.scss";
import SelectControl from "../components/widgets/SelectControl";

const SongFormInput = ({ status, item }) => {
  const albums = [
    { _id: 1, name: "album1" },
    { _id: 2, name: "album2" },
  ];

  const genres =[
    { _id: 1, name: "genre1" },
    { _id: 2, name: "genre2" },

  ]
  const values = {
    title: "",
    length: "",
    album_id: "",
    genre_id: "",
  };

  const handleChange = (val) => {};
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
          <SelectControl
              label="Album"
              handleChangeV2={handleChange("album_id")}
              value={values.album_id}
              validations="required|string"
            >
              <option value="">Select Genre</option>
              {albums.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </SelectControl>
          </div>

          <div className="form-group">
            <SelectControl
              label="Genre"
              handleChangeV2={handleChange("genre_id")}
              value={values.genre_id}
              validations="required|string"
            >
              <option value="">Select Genre</option>
              {genres.map((item) => (
                <option value={item._id} key={item._id}>
                  {item.name}
                </option>
              ))}
            </SelectControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongFormInput;
