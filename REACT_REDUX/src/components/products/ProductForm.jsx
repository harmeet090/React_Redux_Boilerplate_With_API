import React from 'react';
import TextInput from '../common/TextInput';

const ProductForm = ({ product, onSave, onChange }) => {
    return (
        <div>
            <TextInput
            name="id"
            label="id"
            value={product.id}
            readonly={true}/>

          <TextInput
            name="name"
            label="name"
            value={product.name}
            onChange={onChange}/>

          <TextInput
            name="description"
            label="description"
            value={product.description}
            onChange={onChange}/>

          <TextInput
            name="status"
            label="status"
            value={product.status}
            onChange={onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={onSave}/>
        </div>
    );
};

export default ProductForm;