import { Services } from "./services";
import { HttpCommon as http } from "./http";

class AlubmService extends Services {
    
    model = `clubs`

    get_all() {
        return http.get(`/${model}`);
    }

    get_all_paginated(page=1) {
        return http.get(`/${model}?page=${page}`);
    }

    get(album) {
        return http.get(`/${model}/${album}`);
    }

    update(album,data){
        return http.get(`/${model}/${album}`,data);
    }
    create(data){
        return http.get(`/${model}`,data);
    }

    delete(album) {
        return http.delete(`/${model}/${album}`);
    }

    get_songs(genre){
        return http.get(`/${model}/${genre}/songs`);
    }

}

export default new AlubmService();
