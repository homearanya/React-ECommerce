import { HANDLE_SORTED } from "../constants/constants.js";


const handleSorted = (sorted) => {
    return {
        type: HANDLE_SORTED,
        sorted: sorted
    };
};

export default handleSorted;