var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.post("/resultadoQuiz", function (req, res) {
    medidaController.resultadoQuiz(req, res);
})

router.post("/resultadoPersona", function (req, res) {
    medidaController.resultadoPersona(req, res);
})

router.post("/resultadoGlobal", function (req, res) {
    medidaController.resultadoGlobal(req, res);
})
router.post("/resultadoKpiBar", function (req, res) {
    medidaController.resultadoKpiBar(req, res);
})
router.post("/resultadoKpiRadar", function (req, res) {
    medidaController.resultadoKpiRadar(req, res);
})
router.post("/resultadoKpiGlobal", function (req, res) {
    medidaController.resultadoKpiGlobal(req, res);
})

module.exports = router;