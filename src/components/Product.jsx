import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './product.css';


function findProduct(appData, name) {
    let findIndex = -1;
    if (appData.length > 0 && name.length > 0) {
        for (let cat of appData) {
            for (let subCat of cat.subcategories) {
                findIndex = subCat.items.findIndex((element) => {
                    return (element.name === name);
                })
                if (findIndex > -1) {
                    return subCat.items[findIndex];
                }
            }
        }

    }
    return null;
}

const ButtonBack = (props) => {
    return (
        <div className="col-md-2">
            <button onClick={props.goBack} className="btn btn-primary btn-lg">&lt;  Back</button>
        </div>
    );
};

const Item = (props) => {
    return (
        <div className="col-md-8">
            <div className="row">
                <ItemImage
                    item={props.item}
                />
                <ItemDetails
                    item={props.item}
                    quantity={props.quantity}
                    handleChange={props.handleChange}
                    addItem={props.addItem}
                />
            </div>
        </div>
    );
};

const ItemImage = (props) => {
    return (
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
            <img src={props.item.imagelink} alt={props.item.description} className="img-fluid img-product" />
        </div>
    );
};

const ItemDetails = (props) => {
    return (
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center">
            <div>
                <h2 className="font-weight-bold">
                    {props.item.name}
                </h2>
                <p>
                    {props.item.description}
                </p>
                <p>
                    Rating: {props.item.rating} / 5
                        </p>
                <p>
                    Stock: {props.item.stock}
                </p>
                <h3 className="font-weight-bold text-danger">
                    $ {props.item.price}
                </h3>
                <p>
                    Qty: <input name="quantity" type="number" value={props.quantity} step="1" min="0" max={props.itemstock} onChange={(event) => props.handleChange(event)} />
                </p>
                <button className="btn btn-secondary btn-md" onClick={() => props.addItem(props.item, props.quantity)}>Add to Cart</button>
            </div>
        </div>
    );
};

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { quantity: 1 };
        this.productFound = null;
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({ quantity: event.target.value });
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidUpdate() {
        if (this.props.appData.length > 0 && !this.props.product) {
            this.productFound = findProduct(this.props.appData, this.props.match.params.name)
            if (this.productFound) {
                this.props.selectItem(this.productFound);
            }
        }
    }

    render() {
        let item = this.props.product;
        if (!this.props.product) {
            if (!this.props.productFound) {
                return <div className="container">
                    <p>
                        Product {this.props.match.params.name} does not exist in our catalog
                    </p>
                    <p>
                        Other exciting options on our <Link to="/shop">Shop</Link>.
                    </p>
                </div>
            } else {
                return <div className="container">Looking for Product</div>
            }
        }
        return (
            <div className="container">
                <div className="row">
                    <ButtonBack
                        goBack={this.props.history.goBack}
                    />
                    <Item
                        item={item}
                        quantity={this.state.quantity}
                        handleChange={this.handleChange}
                        addItem={this.props.addItem}
                    />
                </div>
            </div>
        )
    }
};

export default Product;