const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  cuisines: {type: String, required: true},
  city: {type: String, default: 'Anytime'},
  state: {type: String, default: 'USA'},
  founded: Number
})
module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
// name: 'H-Thai-ML',
//         city: 'Seattle',
//         state: 'WA',
//         cuisines: 'Thai, Pan-Asian',
//         pic: 'public/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
//       }, {
//         name: 'Coding Dog Cafe',
//         city: 'Phoenix',
//         state: 'AZ',
//         cuisines: 'Coffee, Bakery',
//         pic: 'public/images/charlesdeluvio-_p-DIj5LJKc-unsplash.jpg'
//       }]
   
 