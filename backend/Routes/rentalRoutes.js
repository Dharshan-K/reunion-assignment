const express = require("express")
const {getOwnerProperties,getAllProperties, addProperty, updateProperty, deleteProperty} = require("../Controller/rentalAPI")
const rentalRouter  = express.Router()

rentalRouter.route("/api/list-properties").get(getAllProperties)
rentalRouter.route("/api/property").post(addProperty)
rentalRouter.route("/api/property/:id").get(getOwnerProperties)
rentalRouter.route("/api/property/:id").post(updateProperty)
rentalRouter.route("/api/property/:user/:id").delete(deleteProperty)

module.exports = {rentalRouter}