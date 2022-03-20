const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('layouts/index', { products: matrizProductos });
});
module.exports = router