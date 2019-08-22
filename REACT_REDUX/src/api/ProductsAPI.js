class ProductsAPI {
    static getAllProducts() {
        return fetch('http://localhost:8000/products').then(res => {
            return res.json();
        }).catch(error => {
            return error;
        });
    }

    static saveProduct(p) {
        const request = new Request("http://localhost:8000/products",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(p)
            });

        return fetch(request).then(res => {
            return res.json();
        }).catch(error => {
            return error;
        });
    }

    static updateProduct(p) {
        const request = new Request("http://localhost:8000/products/" + p.id,
            {
                method: 'PUT',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(p)
            });

        return fetch(request).then(res => {
            return res.json();
        }).catch(error => {
            return error;
        });
    }
}

export default ProductsAPI;