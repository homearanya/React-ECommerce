import { TOGGLE_AUTOPLAY } from "../constants/constants.js";
import { AUTOPLAY_INTERVAL } from "../constants/constants.js";

const autoplay = (state = AUTOPLAY_INTERVAL, action) => {
    switch (action.type) {
        case TOGGLE_AUTOPLAY:
            if (!action.autoplay) {
                return AUTOPLAY_INTERVAL;
            } else {
                return false;
            }
        default:
            return state;
    }
};

export default autoplay;