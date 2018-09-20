import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption

} from 'reactstrap';

import './carousel.css';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.carouselItems.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.carouselItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    if (!(this.props.carouselItems)) {
      return;
    }
    const { activeIndex } = this.state;
    let items = [];
    const slides = this.props.carouselItems.map((item) => {
      items.push({ src: item.imagelink, altText: item.description, caption: item.name });
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.imagelink}
        >
          <div className="  carouselItemContainer">
            <Link to={'/product/' + item.name} onClick={() => this.props.selectItem(item)}>
              <img src={item.imagelink} alt={item.description} />
            </Link>
          </div>
          <CarouselCaption captionText={item.description} captionHeader={item.name + ' -  $' + item.price} />
        </CarouselItem>
      );
    });
    return (
      <div className="position-relative">
        <div className="autoplay">
          <label htmlFor="autoplayBox">Autoplay</label>
          <input id="autoplayBox" type="checkbox" checked={this.props.autoplay} onChange={() => this.props.toggleAutoplay(this.props.autoplay)} />
        </div>
        <Carousel
          activeIndex={activeIndex}
          interval={this.props.autoplay}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />

          {slides}

          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default Slider;