import { Services } from "./services";
import { HttpCommon as http } from "./http";

class AlubmService extends Services {
  get_all() {
    return http.get(`/${this.albumPath}`);
  }

  get_by_id(album) {
    return http.get(`/${this.albumPath}/${album}`);
  }

  get_all_paginated(page = 1) {
    return http.get(`/${this.albumPath}?page=${page}`);
  }

  get(album) {
    return http.get(`/${this.albumPath}/${album}`);
  }

  update(album, data) {
    return http.get(`/${this.albumPath}/${album}`, data);
  }
  create(data) {
    return http.post(`/${this.albumPath}`, data);
  }

  uploadPicture(data) {
    return http.put(`/${this.albumPath}/upload`, data);
  }

  delete(album) {
    return http.delete(`/${this.albumPath}/${album}`);
  }

  get_songs(genre) {
    return http.get(`/${this.albumPath}/${genre}/songs`);
  }
}

export default new AlubmService();
