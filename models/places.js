const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: { type: String, default: 'http://placekitten.com/350/350'},
  cuisines: {type: String, required: true},
  city: {type: String, default: 'Anytime'},
  state: {type: String, default: 'USA'},
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded} `
}

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
   
 