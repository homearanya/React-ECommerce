import React from 'react';
import { Link } from 'react-router-dom';
import shoppingcart from '../images/shoppingcart.svg';
import logo from '../images/WideWorldImportersLogo.png';
import './header.css';

const MiniCart = (props) => {
    let subtotal = 0;
    return (<table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            {props.shoppingCart.map((element, i) => {
                let item = element.itemData;
                let quantity = element.quantity;
                let cost = quantity * parseFloat(item.price);
                cost = parseFloat(cost.toFixed(2));
                subtotal = subtotal + cost;
                subtotal = parseFloat(subtotal.toFixed(2));
                return (
                    <tr key={item.name}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            ${item.price}
                        </td>
                        <td>
                            {quantity}
                        </td>
                        <td>
                            ${cost}
                        </td>
                    </tr>
                );
            })}
            <tr>
                <td>
                </td>
                <td>
                </td>
                <td className="border-bottom border-dark">
                </td>
                <td className="border-bottom border-dark">
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td>
                </td>
                <td>
                    Subtotal:
                                    </td>
                <td>
                    ${subtotal}
                </td>
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
        </tbody>
    </table>
    )
}

const Header = (props) => (
    <header>
        <nav id="navHeader" className="navbar navbar-dark bg-dark shadow-sm mb-3">
            <div className="container d-flex flex-column flex-md-row align-items-center p-1 px-md-4">
                <Link to="/" className="navbar-brand">
                    {/* <h4 className="my-0 mr-md-auto font-weight-normal">WW Importers</h4> */}
                    <img id="logo" className="img-fluid" src={logo} alt="Wide World Importers" />
                </Link>

                <div className="nav d-flex justify-content-center justify-content-md-end align-items-center">
                    <div className="nav-item px-2 px-md-3">
                        <Link to="/shop" className="btn btn-primary btn-lg" >Shop</Link>
                    </div>
                    <div className="nav-item cart">
                        <Link to="/shoppingcart">
                            <img src={shoppingcart} alt="Shopping Cart" />
                        </Link>
                        <div>
                            {props.shoppingCart.length > 0 && <div id="cart-score">
                                <div>{props.shoppingCart.length}</div>
                            </div>}
                        </div>

                        <div className="mini-cart">
                            {props.shoppingCart.length > 0
                                &&
                                <MiniCart
                                    shoppingCart={props.shoppingCart}
                                />}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;