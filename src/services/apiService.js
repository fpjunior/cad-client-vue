import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

export const fetchProducts = () => {
  return ajax.getJSON(`${API_URL}/products`).pipe(map(response => response));
};

export const addProduct = (product) => {
  return ajax.post(`${API_URL}/products`, product, {
    'Content-Type': 'application/json'
  }).pipe(map(response => response));
};
