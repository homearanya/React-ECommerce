import { TOGGLE_AUTOPLAY } from "../constants/constants.js";


const toggleAutoplay = (autoplay) => {
    return {
        type: TOGGLE_AUTOPLAY,
        autoplay: autoplay
    };
};

export default toggleAutoplay;