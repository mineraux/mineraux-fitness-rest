const mongoose = require('mongoose')
const Schema = mongoose.Schema

const datedMealSchema = new Schema({
  timestamp: {
    type: String,
    required: true
  },
  meal: {
    type: Schema.Types.ObjectId,
    ref:'Meal',
    required: true
  },
  // anOtherOne: {
  //   type: Number
  // }
})

module.exports = mongoose.model('DatedMeal', datedMealSchema)
