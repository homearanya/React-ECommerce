import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker.js';
import App from "./components/App.jsx";
import populateAppData from "./actions/populateAppData.js";
import populateCat from "./actions/populateCat.js";
import selectSubCat from "./actions/selectSubCat.js";

var store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

// get the external data  
fetch("https://webmppcapstone.blob.core.windows.net/data/itemsdata.json")
    .then(res => res.json())
    .then(
        (result) => {
            store.dispatch(populateAppData(result));
            // for category toggle on Shop Page
            let cats = [];
            for (let i = 0; i < result.length; i++) {
                cats.push(false);
            }
            store.dispatch(populateCat(cats));
            // select first subcategory to show products on Shop Page
            store.dispatch(selectSubCat(0, 0));

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        }
    )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();