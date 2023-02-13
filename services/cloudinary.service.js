import axios from "axios";
import {Services} from "./services";

export const domain = "https://api.cloudinary.com/v1_1/sociacle";
const CLOUDINARY_UPLOAD_PRESET = "flhyd7jb";

const http = axios.create({
    baseURL: domain, headers: {'Content-Type': 'application/json'},
});


class CloudinaryService extends Services {
    formData = new FormData();

    constructor(file) {
        super();
        this.formData.append("file", file);
        this.formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    }

    postVideo(setProgress) {
        return http.post("/video/upload", this.formData, {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                setProgress(percentCompleted);
            }
        });
    }

    postImage(){
        return http.post("/image/upload",this.formData)
    }
}

export default CloudinaryService;
