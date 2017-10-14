var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ejercicio/:nombre/:edad', function (req, res, next) {
    res.json({mensaje: "Hello " + req.params.nombre + ", you are " + req.params.edad + " years old"});
});

module.exports = router;
