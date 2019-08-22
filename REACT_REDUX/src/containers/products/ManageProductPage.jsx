import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as productActions from '../../actions/productActions';

import ProductForm from '../../components/products/ProductForm'

class ManageProductPage extends React.Component {
    constructor(props, context) {
        super(props);

        this.state = {
            product: Object.assign({}, this.props.product)
        };

        this.saveProduct = this.saveProduct.bind(this);
        this.updateProductState = this.updateProductState.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.product.id != nextProps.product.id) {
            this.setState({ product: Object.assign({}, nextProps.product) });
        }
    }

    updateProductState(event) {
        const field = event.target.name;
        let product = this.state.product;
        product[field] = event.target.value;
        return this.setState({ product: product });
    }

    saveProduct(event) {
        event.preventDefault();
        if (this.state.product.id)
            this.props.actions.updateProduct(this.state.product);
        else
            this.props.actions.saveProduct(this.state.product);
        this.context.router.history.push('/products');
    }

    render() {
        return (
            <div>
                <h1>Manage Product</h1>
                <ProductForm product={this.state.product}
                    onChange={this.updateProductState}
                    onSave={this.saveProduct} />
            </div>
        );
    }
}

ManageProductPage.contextTypes = {
    router: PropTypes.shape({
        history: PropTypes.object.isRequired
    })
}

function getProductById(products, id) {
    const product = products.filter(product => product.id == id);
    if (product) return product[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const productId = ownProps.match.params.id;

    let product = {
        id: '',
        name: '',
        description: '',
        status: ''
    };

    if (productId && state.productReducer.length > 0) {
        product = getProductById(state.productReducer, productId);
    }
    return {
        product: product
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProductPage);