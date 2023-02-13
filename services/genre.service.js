import { Services } from "./services";
import { HttpCommon as http } from "./http";

class GenreService extends Services {
    model = `genre`

    get_all() {
        return http.get(`/${model}`);
    }

    get_by_id(genre){
        return http.get(`/${model}/${genre}`);
    }

    create(data) {
        return http.post(`/${model}/`,data);
    }

    update(genre,data) {
        return http.post(`/${model}/${genre}`,data);
    }

    delete(genre) {
        return http.delete(`/${model}/${genre}`);
    }

    get_songs(genre){
        return http.get(`/${model}/${genre}/songs`);
    }
}

export default new GenreService();
