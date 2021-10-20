import Image from "./Image.js";
import Video from "./Video.js";

class MediaFactory {

    build(data, photographer) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty("image")) {
            return new Image(data, photographer);
        }
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty("video")) {
            return new Video(data, photographer);
        }
    }
}

export default MediaFactory;