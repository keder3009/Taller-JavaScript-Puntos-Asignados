var express = require('express');
var router = express.Router();

/* GET home page. */
router.put('/ejercicio', function (req, res, next) {
    res.json({mensaje: "Hello " + req.body.nombre + ", you are " + req.body.edad + " years old"});
});

module.exports = router;
