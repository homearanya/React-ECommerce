import { connect } from "react-redux";
import Shop from "../components/Shop.jsx";
import toggleCat from "../actions/toggleCat.js";
import selectSubCat from "../actions/selectSubCat.js";
import selectItem from "../actions/selectItem.js";
import addItem from "../actions/addItem.js";
import toggleStock from "../actions/toggleStock.js";
import handleSorted from "../actions/handleSorted.js";


const mapStateToProps = state => {
    return {
        appData: state.appData,
        categories: state.categories,
        selectedSubCat: state.selectedSubCat,
        stock: state.stock,
        sorted: state.sorted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCat: (id) => {
            dispatch(toggleCat(id));
        },
        selectSubCat: (catId, subCatId) => {
            dispatch(selectSubCat(catId, subCatId));
        },
        selectItem: (itemData) => {
            dispatch(selectItem(itemData));
        },
        addItem: (itemData, quantity) => {
            dispatch(addItem(itemData, quantity));
        },
        toggleStock: (stock) => {
            dispatch(toggleStock(stock));
        },
        handleSorted: (sorted) => {
            dispatch(handleSorted(sorted));
        },
    };
};

const ShopContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Shop);

export default ShopContainer;