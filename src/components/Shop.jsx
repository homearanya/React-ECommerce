import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';

const ShopHeader = (props) => {
    return (
        <div id="shop-header" className="row">
            <Detail
                numItems={props.numItems}
                subCatNumItems={props.subCatNumItems}
                selectedSubCat={props.selectedSubCat}
            />
            <StockBox stock={props.stock} toggleStock={props.toggleStock} />
            <SortedBox sorted={props.sorted} handleSorted={props.handleSorted} />
        </div>
    );
};

const Detail = (props) => {
    return (
        <div className="col-md-7">
            <span>showing {props.numItems} of {props.subCatNumItems} items in <strong>{props.selectedSubCat.name}</strong></span>
        </div>
    );
};

const StockBox = (props) => {
    return (
        <div className="col-md-2">
            <span>in stock only&nbsp;</span>
            <input id="stock" type="checkbox" checked={props.stock} onChange={() => props.toggleStock(props.stock)} />
        </div>
    );
};

const SortedBox = (props) => {
    return (
        <div className="col-md-3">
            <span>sorted by &nbsp;</span>
            <select value={props.sorted} onChange={(event) => props.handleSorted(event.target.value)}>
                <option value="none">None</option>
                <option value="Price">Price</option>
                <option value="Alphabetical">Alphabetical</option>
                <option value="Rating">Rating</option>
            </select>
        </div>
    );
};

const ShopBody = (props) => {
    return (
        <div className="row">
            <CategoryList
                appData={props.appData}
                categories={props.categories}
                selectSubCat={props.selectSubCat}
                handleClick={props.handleClick}
            />
            <ProductList
                items={props.items}
                selectItem={props.selectItem}
                addItem={props.addItem}
            />
        </div>
    );
};

const CategoryList = (props) => {
    return (
        <div className="col-md-3">
            <aside>
                <ul>
                    {props.appData.map((cat, i) => {
                        return <Category
                            key={i}
                            handleClick={props.handleClick}
                            cat={cat}
                            categories={props.categories}
                            i={i}
                            selectSubCat={props.selectSubCat}
                        />;
                    })}
                </ul>
            </aside>
        </div>
    );
};

const Category = (props) => {
    return (
        <div>
            <li key={props.cat.category} className="category text-primary" onClick={() => props.handleClick(props.i)}>
                {props.cat.category}
            </li>
            {props.categories[props.i] && <SubCategories
                cat={props.cat}
                selectSubCat={props.selectSubCat}
                i={props.i}
            />}
        </div>
    );
};

const SubCategories = (props) => {
    return (
        <ul className="subcategories">
            {props.cat.subcategories.map((subcat, j) => {
                return (
                    <li key={subcat.name} className="subcategory text-primary" onClick={() => props.selectSubCat(props.i, j)}>{subcat.name}</li>
                )
            })}
        </ul>
    );
};

const ProductList = (props) => {
    let products = props.items.map((item, i) => {
        return <Product
            key={item.name}
            item={item}
            selectItem={props.selectItem}
            addItem={props.addItem}
        />
    });
    return (
        <div className="col-md-9">
            <div className="row">
                {products}
            </div>
        </div>
    );
};

const Product = (props) => {
    return (
        <div className="col-md-4 item">
            <div className="item-inner">
                <ProductHeader
                    item={props.item}
                    selectItem={props.selectItem}
                />
                <ProductImage
                    item={props.item}
                    selectItem={props.selectItem}
                />
                <ProductFooter
                    item={props.item}
                    addItem={props.addItem}
                />
            </div>
        </div>
    );
};

const ProductHeader = (props) => {
    return (
        <div className="item-header d-flex justify-content-between align-items-center">
            <strong className="item-name">
                <Link to={'/product/' + props.item.name} onClick={() => props.selectItem(props.item)}>
                    {props.item.name}
                </Link>
            </strong>
            <strong className="text-danger">${props.item.price}</strong>
        </div>
    );
};

const ProductImage = (props) => {
    return (
        <div className="img-item-container">
            <Link to={'/product/' + props.item.name} onClick={() => props.selectItem(props.item)}>
                <img src={props.item.imagelink} alt={props.item.description} className="img-item" />
            </Link>
        </div>
    );
};

const ProductFooter = (props) => {
    return (
        <div className="item-footer d-flex justify-content-between align-items-center">
            <span >Rating: {props.item.rating}</span>
            <span >Stock: {props.item.stock}</span>
            <button className="btn btn-dark btn-sm" onClick={() => props.addItem(props.item, 1)}>Add</button>
        </div>
    );
};

class Shop extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleClick(i) {
        this.props.toggleCat(i);
        this.forceUpdate();
    }

    render() {
        if (!this.props.selectedSubCat) {
            return <div></div>;
        }
        let catId = this.props.selectedSubCat.catId;
        let subCatId = this.props.selectedSubCat.subCatId;
        let selectedSubCat = this.props.appData[catId].subcategories[subCatId];
        // select items (products)
        let items = [];
        selectedSubCat.items.forEach(item => {
            if (!(this.props.stock && item.stock === '0')) {
                items.push(item);
            }
        });
        // sort items
        switch (this.props.sorted) {
            case 'Price':
                items.sort(function (a, b) {
                    return a.price - b.price;
                });
                break;
            case 'Alphabetical':
                items.sort(function (a, b) {
                    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    // names must be equal
                    return 0;
                });
                break;
            case 'Rating':
                items.sort(function (a, b) {
                    return b.rating - a.rating;
                });
                break;
            default:
        }
        return (
            <div id="shop" className="container">
                <h1 className="mb-3 text-center">OUR SHOP</h1>
                <h3 className="mb-5 text-center ">Browse through our exciting catalog</h3>

                <ShopHeader
                    selectedSubCat={selectedSubCat}
                    subCatNumItems={selectedSubCat.items.length}
                    numItems={items.length}
                    stock={this.props.stock}
                    toggleStock={this.props.toggleStock}
                    sorted={this.props.sorted}
                    handleSorted={this.props.handleSorted}
                />
                <ShopBody
                    appData={this.props.appData}
                    items={items}
                    handleClick={this.handleClick}
                    categories={this.props.categories}
                    selectSubCat={this.props.selectSubCat}
                    selectItem={this.props.selectItem}
                    addItem={this.props.addItem}
                />
            </div>
        )
    }
};

export default Shop;