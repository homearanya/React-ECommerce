import { POPULATE_APP_DATA } from "../constants/constants.js";


const populateAppData = (data) => {
    return {
        type: POPULATE_APP_DATA,
        appData: data
    };
};

export default populateAppData;