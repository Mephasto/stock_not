var mongoose = require('mongoose');

var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var equipmentSchema = new Schema({
    part_number	    : String
  , description     : String
  , serial_number   : { type: String, unique: true }
  , cost            : Number
  , status          : Number
  , date_ordered    : Date
  , date_arrived    : Date
  , tracking_number : String
  , quantity        : Number
});

var orderSchema = new Schema({
    order_code      : { type: String, required: true, unique: true }
  , _po             : String
  , _su             : String
  , order           : Array
  , description     : String
  , status          : Number
  , 
});

var poSchema = new Schema({
    po_code         : { type: String, required: true, unique: true }
  , _cl             : Number
  , country_code    : Number
  , orders          : Array
  , pdf             : String
  , date_delivered  : Date
  ,
});

var clientSchema = new Schema({
    contact_name    : String
  , company_name    : String
  , country_code    : Number
  , email           : String
  , phone           : String
});

var countrySchema = new Schema({
    country_code    : { type: Number, required: true, unique: true }
  , name            : String
});

exports.Equipement = mongoose.model('Equipement', equipmentSchema);
exports.Order = mongoose.model('Order', orderSchema);
