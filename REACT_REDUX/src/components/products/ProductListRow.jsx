import React from 'react';
import { Link } from 'react-router-dom';

const ProductListRow = ({ product }) => {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.status}</td>
            <td><Link className="text-info" to={'product/' + product.id}>Edit</Link></td>
            <td><Link className="text-danger" to={'delete/product/' + product.id}>Delete</Link></td>
        </tr>
    );
};

export default ProductListRow;