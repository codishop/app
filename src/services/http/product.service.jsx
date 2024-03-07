import HttpService from '../http.service';

class ProductService {
    static async find() {
        return HttpService.get({ url: 'http://localhost:5000/products' });
    }

    static async get(id) {
        return HttpService.get({ url: `http://localhost:5000/products/${id}` });
    }

    static async create(product) {
        return HttpService.post({ url: 'http://localhost:5000/products', body: product });
    }

    static async update(id, product) {
        return HttpService.put({ url: `http://localhost:5000/products/${id}`, body: product });
    }
}

export default ProductService