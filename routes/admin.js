const express = require('express');
const path = require('path');
const router = express.Router();

const productsController = require('../controllers/products');

const products = [];
// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});


exports.routes = router;
exports.products = products;
