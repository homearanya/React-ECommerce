import { connect } from "react-redux";
import ShoppingCart from "../components/ShoppingCart.jsx";
import deleteItem from "../actions/deleteItem.js";
import updateItem from "../actions/updateItem.js";

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        },
        updateItem: (id, quantity) => {
            dispatch(updateItem(id, quantity));
        },

    };
};

const ShoppingCartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingCart);

export default ShoppingCartContainer;