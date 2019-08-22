import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import ProductList from "../../components/products/ProductList";

import * as productActions from '../../actions/productActions';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.props.match.params);
        this.props.actions.loadProducts();
    }

    render() {
        const { products } = this.props;

        return (
            <div>
                <h2>Products Page</h2>
                <RedirectButton></RedirectButton>
                {/* <button className="btn btn-primary" onClick={this.handleClick}>Load</button> */}
                <ProductList products={products} />
            </div>
        )
    }
}

const RedirectButton = withRouter(({ history }) => (
    <button type="button" className="btn btn-primary" onClick={() => { history.push('/product') }}>Add Product</button>
))

function mapStateToProps(state, ownProps) {
    return {
        products: state.productReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);