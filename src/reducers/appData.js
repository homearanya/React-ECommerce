import { POPULATE_APP_DATA } from "../constants/constants.js";

const appData = (state = [], action) => {
    switch (action.type) {
        case POPULATE_APP_DATA:
            return action.appData
        default:
            return state;
    }
};

export default appData;