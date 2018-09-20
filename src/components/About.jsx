import React, { Component } from 'react'
import Waypoint from 'react-waypoint';
import './about.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class WheninView extends Component {
    constructor(props) {
        super(props);
        this.state = { isInView: false };
        this.onEnter = this.onEnter.bind(this);
    }

    onEnter({ previousPosition }) {
        if (previousPosition === Waypoint.below && !this.state.isInView) {
            this.setState({ isInView: true });
        }
    }

    render() {
        return (
            <div className={this.props.componentClasses}>
                <Waypoint onEnter={this.onEnter}></Waypoint>
                {this.props.children({ isInView: this.state.isInView })}
            </div>
        )
    }
}

const Hero = () => {
    return (
        <div className="col-md-12 hero">
            <h2 className="herohead">Our Journey</h2>
        </div>
    )
}

const TextItem = (props) => {
    return (
        <div className="container-fluid col-lg-6 head2">
            {props.text}
            <hr />
            <button type="button" className="headbutton btn btn-default">Learn more</button>
        </div>
    )
}

const Image = (props) => {
    let componentClasses = ['head2'];
    if (props.show) { componentClasses = [...componentClasses, props.className1]; }
    return (
        <div className={componentClasses.join(' ')} >
            <img className={props.className2} src={props.src} alt="About us" />
        </div>
    )
}

const Section2Left = (props) => {
    return (
        <div className="row">
            <TextItem text={props.text} />
            <WheninView componentClasses={props.componentClasses}>
                {({ isInView }) =>
                    <Image
                        className1={props.className1}
                        className2={props.className2}
                        src={props.src}
                        show={isInView} />}
            </WheninView>
            <hr className="divider"></hr>
        </div>
    )
}
const Section2Right = (props) => {
    return (
        <div className="row">
            <WheninView componentClasses={props.componentClasses}>
                {({ isInView }) =>
                    <Image
                        className1={props.className1}
                        className2={props.className2}
                        src={props.src}
                        show={isInView} />}
            </WheninView>
            <TextItem text={props.text} />
            <hr className="divider"></hr>
        </div>
    )
}

const OwlItem = (props) => {

    return (
        <div className="item">
            <div className={props.componentClasses}>
                <div className="container-fluid">
                    <img className="avatar" src="https://www.trendingus.com/assets/encrypted/about-template/bootstrap/demo/assets/img/testi1.png" alt="Testimonial" />
                    <p className="paravatar">
                        <strong>A nam</strong>
                        <br /> Senior Partner
                                 </p>
                </div>
                <div className="container-fluid testdesc">
                    <p>Iâve just fallen in love with this template and there's nothing you can ever do that would make me not want to buy it.</p>
                    <i className={props.avatarClass}></i>
                </div>
            </div>
        </div>
    )
}

const Testimonials = (props) => {
    let componentClasses1 = ['container testi testione'];
    let componentClasses2 = ['container testi testitwo'];
    let componentClasses3 = ['container testi testithree'];

    if (props.show) {
        componentClasses1 = [...componentClasses1, ['animate one fadeInRight']];
        componentClasses1 = componentClasses1.join(' ');
        componentClasses3 = [...componentClasses3, ['animate one fadeInLeft']];
        componentClasses3 = componentClasses3.join(' ');
    } else {
        return null;
    }

    return (
        <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={10}
            responsive={{
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }}
        >
            <OwlItem componentClasses={componentClasses1} avatarClass="ion-social-facebook" />
            <OwlItem componentClasses={componentClasses2} avatarClass="ion-social-snapchat" />
            <OwlItem componentClasses={componentClasses3} avatarClass="ion-social-instagram-outline" />
            <OwlItem componentClasses={componentClasses1} avatarClass="ion-social-linkedin" />
            <OwlItem componentClasses={componentClasses2} avatarClass="ion-social-googleplus-outline" />
            <OwlItem componentClasses={componentClasses3} avatarClass="ion-social-twitter" />
        </OwlCarousel>
    )
}

const TestimonialsContainer = () => {
    return (
        <div className="row col-md-12 testimonials">
            <div className="container-fluid">
                <h3 className="testimonials">Testimonials</h3>
                <p className="testimonials">Let them talk about you while you're ruling the rest</p>
                <WheninView componentClasses="">
                    {({ isInView }) =>
                        <Testimonials show={isInView} />}
                </WheninView>
            </div>
        </div>
    )
}

const CTAbox = () => {
    return (
        <div className="row col-md-12 CTAbox">
            <h3 className="cta">Company News</h3>
            <p className="cta">Keep up to date on the latest happenings & developments in the world of Wide World Importers</p>
            <hr />
            <button type="button" className="ctabutton btn btn-default">Learn More</button>
        </div>
    )
}
const SocialItem = (props) => {
    return (
        <div className={props.className1}>
            <div className="container-fluid">
                <i className={props.icon}></i>
                {props.text}
            </div>
        </div>
    )
}


const Social = (props) => {
    let componentClasses = ['container footerbox'];
    if (props.show) {
        componentClasses = [...componentClasses, ['animate one fadeInUp']];
        componentClasses = componentClasses.join(' ');
    }
    return (
        <div>
            <SocialItem
                className1={componentClasses}
                icon="ion-social-facebook"
                text={<p className="paravatar auth1">
                    <strong>Facebook</strong>
                    <br />
                    Like us on facebook
                </p>}
            />
            <SocialItem
                className1={componentClasses}
                icon="ion-social-twitter"
                text={<p className="paravatar auth1">
                    <strong>Twitter</strong>
                    <br />
                    Follow us on Twitter
                </p>}
            />
            <SocialItem
                className1={componentClasses}
                icon="ion-social-instagram-outline"
                text={<p className="paravatar auth1">
                    <strong>Instagram</strong>
                    <br />
                    Follow us on Instagram
                    </p>}
            />
        </div>
    )
}

const SocialMedia = (props) => {
    return (
        <div className="row col-md-12 footer">
            <div className="container-fluid">
                <h3 className="social">Never Miss An Update</h3>
                <h4 className="social">Chase us on social media</h4>
                <WheninView componentClasses="">
                    {({ isInView }) =>
                        <Social show={isInView} />}
                </WheninView>
            </div>
        </div>
    )
}

export default class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Hero />
                <Section2Left
                    text=
                    {
                        <div>
                            <h3 className="another-head">Our Values</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi at lectus pretium condimentum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi at lectus pretium condimentum. Proin aliquet sit amet ligula id eleifend. Nam maximus vestibulum leo. Phasellus a lacus cursus, iaculis nibh eget, dignissim velit. Nulla mollis, libero et lacinia elementum, leo nulla laoreet nunc, sed pellentesque nisl tortor a sapien.
                            </p>
                            <p>
                                Morbi ut justo gravida, egestas elit ut, pharetra sem. Morbi sit amet vulputate risus. Donec consectetur tempus venenatis. Nunc eros mi, dignissim ac metus sollicitudin, placerat eleifend sem.
                            </p>
                        </div>
                    }
                    componentClasses="container-fluid col-lg-6 mobilevec mobilevecone"
                    className1={['animate one fadeInLeft']}
                    className2="right-mobile img-fluid"
                    src="http://www.carmeuseoverseas.com/sites/default/files/values2016_enweb_0.png"
                />
                <Section2Right
                    text=
                    {
                        <div>
                            <h3 className="another-head">Our Environment</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi at lectus pretium condimentum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi at lectus pretium condimentum. Proin aliquet sit amet ligula id eleifend. Nam maximus vestibulum leo. Phasellus a lacus cursus, iaculis nibh eget, dignissim velit. Nulla mollis, libero et lacinia elementum, leo nulla laoreet nunc, sed pellentesque nisl tortor a sapien.
                            </p>
                            <p>
                                Morbi ut justo gravida, egestas elit ut, pharetra sem. Morbi sit amet vulputate risus. Donec consectetur tempus venenatis. Nunc eros mi, dignissim ac metus sollicitudin, placerat eleifend sem.
                            </p>
                        </div>
                    }
                    componentClasses="container-fluid col-lg-6 mobilevec mobilevectwo"
                    className1={['animate one fadeInRight']}
                    className2="right-mobile2 img-fluid"
                    src="http://www.checkouts.eu/Files/Images/NewsImages/Newsitem-Checkout-environment-to-enjoy.jpg" />
                <Section2Left
                    text=
                    {
                        <div>
                            <h3 className="another-head">Our People</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi at lectus pretium condimentum.
                        </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet mi at lectus pretium condimentum. Proin aliquet sit amet ligula id eleifend. Nam maximus vestibulum leo. Phasellus a lacus cursus, iaculis nibh eget, dignissim velit. Nulla mollis, libero et lacinia elementum, leo nulla laoreet nunc, sed pellentesque nisl tortor a sapien.
                        </p>
                            <p>
                                Morbi ut justo gravida, egestas elit ut, pharetra sem. Morbi sit amet vulputate risus. Donec consectetur tempus venenatis. Nunc eros mi, dignissim ac metus sollicitudin, placerat eleifend sem.
                        </p>
                        </div>
                    }
                    componentClasses="container-fluid col-lg-6 mobilevec mobilevecthree"
                    className1={['animate one fadeInLeft']}
                    className2="right-mobile3 img-fluid"
                    src="http://www.rrdonnelley.co.uk/sites/default/files/2016-02/Our%20People.jpg"
                />
                <TestimonialsContainer />
                <CTAbox />
                <SocialMedia />
            </div>
        )
    }
}