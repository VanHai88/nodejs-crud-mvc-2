import { Request, Response } from 'express';
import { ProductModel } from '../models/productModel';
import { Product } from '../types';

export class ProductController {
  static getAll(req: Request, res: Response) {
    const products = ProductModel.getAll();
    res.json(products);
  }

  static getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const product = ProductModel.getById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  static create(req: Request, res: Response) {
    const { name, price, description } = req.body;
    if (!name || !price || !description) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const newProduct = ProductModel.create({ name, price, description });
    res.status(201).json(newProduct);
  }

  static update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const { name, price, description } = req.body;
    const updatedProduct = ProductModel.update(id, { name, price, description });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  static delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleted = ProductModel.delete(id);
    if (deleted) {
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }
}