import fs from 'fs';
import path from 'path';
import { Product } from '../types';

const dataPath = path.join(__dirname, '../data/data.json');

export class ProductModel {
  static getAll(): Product[] {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  }

  static getById(id: number): Product | undefined {
    const products = this.getAll();
    return products.find(p => p.id === id);
  }

  static create(product: Omit<Product, 'id'>): Product {
    const products = this.getAll();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const newProduct: Product = { id: newId, ...product };
    products.push(newProduct);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return newProduct;
  }

  static update(id: number, updatedProduct: Partial<Omit<Product, 'id'>>): Product | null {
    const products = this.getAll();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...updatedProduct };
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return products[index];
  }

  static delete(id: number): boolean {
    const products = this.getAll();
    const filtered = products.filter(p => p.id !== id);
    if (filtered.length === products.length) return false;
    fs.writeFileSync(dataPath, JSON.stringify(filtered, null, 2));
    return true;
  }
}