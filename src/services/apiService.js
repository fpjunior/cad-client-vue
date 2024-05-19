import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

export const fetchProducts = () => {
  return ajax.getJSON(`${API_URL}/products`).pipe(map(response => response));
};

export const updateProduct = (product) => {
  return ajax.put(`${API_URL}/products/${product.id}`, product, {
    'Content-Type': 'application/json'
  }).pipe(map(response => response));
};

export const addClient = (client) => {
  return ajax.post(`${API_URL}/clients`, client, {
    'Content-Type': 'application/json'
  }).pipe(map(response => response));
};
