const express = require("express");
const adminController = require("../controllers/admin-conroller");
const authMiddlewere = require("../middlewere/authMiddlwere");
const adminMiddllewere = require("../middlewere/admin-middlewere");

const router = express.Router();

router
  .route("/users")
  .get(authMiddlewere, adminMiddllewere, adminController.getAlluser);
router
  .route("/users/:id")
  .get(authMiddlewere, adminMiddllewere, adminController.getUserById);
router
  .route("/users/update/:id")
  .patch(authMiddlewere, adminController.updateUserById);
router
  .route("/users/delete/:id")
  .delete(authMiddlewere, adminMiddllewere, adminController.deleteUserById);
router
  .route("/contacts")
  .get(authMiddlewere, adminMiddllewere, adminController.getAllcontact);
router
  .route("/contacts/delete/:id")
  .delete(authMiddlewere, adminMiddllewere, adminController.deleteContactById);

module.exports = router;
