import { Services } from "./services";
import { HttpCommon as http } from "./http";

class SongService extends Services {
    path = "song";

    get_all() {
        return http.get(`/${this.path}`);
    }

    get_all_paginated(page=1) {
        return http.get(`/${this.path}?page=${page}`);
    }

    create(data) {
        return http.post(`/${this.path}`, data);
    }

    get_by_id(song) {
            return http.get(`/${this.path}/${song}`);
    }

    update(song, data) {
        return http.put(`/${this.path}/${song}`, data);
    }

    delete(song) {
        return http.delete(`/${this.path}/${song}`);
    }

}

export default new SongService();
