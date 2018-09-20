import { connect } from "react-redux";
import Header from "../components/Header.jsx";

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    null
)(Header);

export default HeaderContainer;