import React, { Component } from 'react';
import './shoppingCart.css';

const Order = (props) => {
    let subtotal = 0;
    let items = props.shoppingCart.map((element, i) => {
        let item = element.itemData;
        let quantity = element.quantity;
        let cost = quantity * parseFloat(item.price);
        cost = parseFloat(cost.toFixed(2));
        subtotal = subtotal + cost;
        subtotal = parseFloat(subtotal.toFixed(2));
        return (
            <tr key={item.name}>
                <td>
                    <img src={item.imagelink} alt={item.description} className="img-cart" />
                </td>
                <td>
                    {item.name}
                </td>
                <td>
                    ${item.price}
                </td>
                <td>
                    <input name="quantity" type="number" value={quantity} step="1" min="0" max={item.stock} onChange={(event) => props.updateItem(i, parseInt(event.target.value, 10))} />
                </td>
                <td>
                    ${cost}
                </td>
                <td>
                    <button onClick={() => props.deleteItem(i)}>x</button>
                </td>
            </tr>
        );
    });
    return (
        <div className="col-md-6">
            <h2>Your Order</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Cost</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td className="border-bottom border-dark">
                        </td>
                        <td className="border-bottom border-dark">
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            subtotal:
                    </td>
                        <td>
                            ${subtotal}
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            Shipping:
                    </td>
                        <td>
                            Free
                    </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            Tax (10%):
                    </td>
                        <td>
                            ${parseFloat(subtotal * 0.1).toFixed(2)}
                        </td>
                        <td>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td className="text-danger">
                            Total:
                    </td>
                        <td className="text-danger">
                            ${parseFloat(subtotal * 1.1).toFixed(2)}
                        </td>
                        <td>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", address: "", city: "", phoneNumber: "" };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event, index) {
        switch (event.target.name) {
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'address':
                this.setState({ address: event.target.value });
                break;
            case 'city':
                this.setState({ city: event.target.value });
                break;
            case 'phoneNumber':
                this.setState({ phoneNumber: event.target.value });
                break;
            default:
                console.log('Wrong Case in Switch HandleChange');
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Your order has been placed');
        this.setState({ name: "", address: "", city: "", phoneNumber: "" });
    }
    render() {
        return (
            <div className="col-md-6">
                <h2>Your Contact Details</h2>
                <form onSubmit={this.handleSubmit} id="cart-form">
                    <input required name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} /> <br />
                    <input required name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleChange} /> <br />
                    <input required name="city" type="text" placeholder="City" value={this.state.city} onChange={this.handleChange} />
                    <input required name="phoneNumber" type="text" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.handleChange} />
                    <input type="submit" value="Place Order" disabled={this.props.numItems === 0} className="btn btn-primary btn-md float-right mt-2" />
                </form>
            </div>
        )
    }
}
const ShoppingCart = (props) => {
    return (
        <div className="container">
            <h1 className="mb-3 text-center">SHOPPING CART</h1>
            <div className="row">
                <Order
                    shoppingCart={props.shoppingCart}
                    deleteItem={props.deleteItem}
                    updateItem={props.updateItem}
                />
                <OrderForm
                    numItems={props.shoppingCart.length}
                />
            </div>
        </div>
    );
};

export default ShoppingCart;