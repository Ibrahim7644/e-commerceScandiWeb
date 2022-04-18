import React, { Component } from 'react'

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

// components

import AddProduct from '../Components/AddProduct';
import Cart from '../Components/Cart';
import ProductList from '../Components/ProductList';
import Main from '../Views/Main';

export default class RouterPath extends Component {
    render() {
        return (
            <Router ref={this.routerRef}>

                <Routes >
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/add-product" element={<AddProduct />} />
                    <Route exact path="/products" element={<ProductList />} />
                </Routes >

            </Router>
        )
    }
}
