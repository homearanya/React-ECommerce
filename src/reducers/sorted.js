import { HANDLE_SORTED } from "../constants/constants.js";

const sorted = (state = 'none', action) => {
    switch (action.type) {
        case HANDLE_SORTED:
            return action.sorted;
        default:
            return state;
    }
};

export default sorted;