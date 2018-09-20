import { connect } from "react-redux";
import Slider from "../components/Carousel.jsx";
import selectItem from "../actions/selectItem.js";
import toggleAutoplay from "../actions/toggleAutoplay.js";

const mapStateToProps = state => {
    return {
        carouselItems: state.carouselItems,
        selectedItem: state.selectedItem,
        autoplay: state.autoplay
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectItem: (itemData) => {
            dispatch(selectItem(itemData));
        },
        toggleAutoplay: (autoplay) => {
            dispatch(toggleAutoplay(autoplay));
        },
    };
};

const CarouselContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);

export default CarouselContainer;