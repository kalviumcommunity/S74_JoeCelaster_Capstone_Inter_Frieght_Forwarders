const mongoose = require('mongoose')

const ShipmentSchema = new mongoose.Schema({
  letterOfCredit : {type:String},
  packingList : {type:String},
  invoice : {type:String},
  po : {type:String},
})

module.exports = mongoose.model('Shipment',ShipmentSchema)