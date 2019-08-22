import React from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({ products }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <ProductListRow key={product.id} product={product} />
                )}
            </tbody>
        </table>
    );
};

export default ProductList;