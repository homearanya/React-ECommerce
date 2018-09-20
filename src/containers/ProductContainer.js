import { connect } from "react-redux";
import Product from "../components/Product.jsx";
import addItem from "../actions/addItem.js";
import selectItem from "../actions/selectItem.js";

const mapStateToProps = state => {
    return {
        appData: state.appData,
        product: state.selectedItem
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (itemData, quantity) => {
            dispatch(addItem(itemData, quantity));
        },
        selectItem: (itemData) => {
            dispatch(selectItem(itemData));
        },
    };
};

const ProductContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);

export default ProductContainer;