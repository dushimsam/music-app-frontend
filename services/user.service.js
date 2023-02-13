import {Services} from "./services";
import {HttpCommon as http} from "./http";

class UsersService extends Services {
   
    path = "song";

    get_all() {
        return http.get(`${this.path}`);
    }

    get_by_id(user) {
        return http.get(`/${this.path}/${user}`);
    }
}

export default new UsersService();
