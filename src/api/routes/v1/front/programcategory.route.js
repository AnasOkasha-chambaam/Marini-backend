// Anasite - Edits: setting up routes
const express = require("express");
//  const controller = require('../../../controllers/front/university.controller')
const controller = require("../../../controllers/front/programcategory.controller");
const router = express.Router();

const multer = require("multer");
const upload = multer();
router.route("/create").post(upload.any(), controller.createProgramCategory);
router.route("/listProgramCategorys").get(controller.listProgramCategorys);
router.route("/edit").put(upload.any(), controller.edit);
router.route("/delete").post(controller.delete);
router.route("/get/:id").get(controller.get);
// router.findAll();

module.exports = router;
