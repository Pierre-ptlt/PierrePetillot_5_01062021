import Image from "./Image.js";
import Video from "./Video.js";

class MediaFactory {

    build(data, photographer) {
        if (data.hasOwnProperty('image')) {
            return new Image(data, photographer);
        }
        if (data.hasOwnProperty('video')) {
            return new Video(data, photographer);
        }
    }
}

export default MediaFactory;