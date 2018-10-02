import React, { Component } from 'react';
import './contact.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            referral: null
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange(event) {
        switch (event.target.name) {
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'subject':
                this.setState({ subject: event.target.value });
                break;
            case 'message':
                this.setState({ message: event.target.value });
                break;
            case 'referral':
                this.setState({ referral: event.target.value });
                break;
            default:
                console.log('Wrong Case in Switch HandleChange');
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Your message has been sent. We\'ll come back to you as soon as possible');
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            referral: null
        });
    }

    render() {
        return (
            <div className="col-md-8" id="contact-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 fullName">
                            <label htmlFor="name">Full name (required)</label> <br />
                            <input required name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange} /> <br />
                            <label htmlFor="email">Email Address (required)</label> <br />
                            <input required name="email" id="email" type="email" value={this.state.email} onChange={this.handleChange} /> <br />
                        </div>
                        <div className="col-md-6">
                            <label>How did you find us? (required)</label> <br />
                            <input required name="referral" id="social" type="radio" value='social' checked={this.state.referral === 'social'} onChange={this.handleChange} />
                            <label htmlFor="social">Social Networks</label> <br />
                            <input name="referral" id="web" type="radio" value='web' checked={this.state.referral === 'web'} onChange={this.handleChange} />
                            <label required htmlFor="web">Web Search</label> <br />
                            <input name="referral" id="friend" type="radio" value='friend' checked={this.state.referral === 'friend'} onChange={this.handleChange} />
                            <label required htmlFor="friend"> Recommended by a Friend</label>
                        </div>
                    </div>
                    <label htmlFor="subject">Subject</label> <br />
                    <select name="subject" id="subject" value={this.state.subject} onChange={this.handleChange}>
                        <option value="delivery">Delivery</option>
                        <option value="returns">Returns</option>
                        <option value="refunds">Refunds</option>
                        <option value="orders">Orders Issues</option>
                        <option value="payments">Payments</option>
                        <option value="products">Products and Stock</option>
                        <option value="technical">Technical</option>
                    </select>
                    <br />
                    {/* <input name="subject" id="subject" type="text" value={this.state.subject} onChange={this.handleChange} /> <br /> */}
                    <label htmlFor="message">Message</label> <br />
                    <textarea name="message" id="message" type="text" value={this.state.message} onChange={this.handleChange} /> <br />
                    <input type="submit" value="Send" className="btn btn-primary btn-md float-right mt-2" />
                </form>

            </div>
        )
    }
};

const ContactDetails = () => {
    return (
        <div className="col-md-4" id="contact-details">
            <h5><strong>Wide World importers</strong></h5>
            <div className="address-container">
                <p><strong>Address:</strong></p>
                <p className="address">17 Miller Street <br />
                    Howick <br />
                    3290 <br />
                    South Africa
                </p>
            </div>
            <p><strong>Tel:</strong> <span className="telephone">+27 33 330 4154</span></p>
            <p><strong>Email:</strong> <span className="email">info@wwimporters.co.za</span></p>
        </div>
    );
};

const Contact = () => {
    return (<div className="container" id="contact-page">
        <h1 className="mb-3 text-center ">GET IN TOUCH</h1>
        <h3 className="mb-5 text-center ">Contact us by email, phone or through our web form below</h3>
        <div className="row">
            <ContactForm />
            <ContactDetails />
        </div>
    </div>
    );
};

export default Contact;