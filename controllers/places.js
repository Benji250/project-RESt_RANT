const router = require('express').Router()
const places = require ('../modles/places.js')

router.post('/', (req,res) =>{
  // console.log(req.body)
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
    places.push(req.body)
   res.redirect('/places')
    //let places = []
    router.get('/:id', (req, res) => {
      res.render('places/show')
      let id = Number(req.params.id)
      if (isNaN(id)){
        res.render('error404')
      }
      else if (!places[id]){
          res.render(error404)
      }
      else {
        places.splice(id, 1)
        res.redirect('/places')
      }
    })
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'public/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
      }, {
        name: 'Coding Dog Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'public/images/charlesdeluvio-_p-DIj5LJKc-unsplash.jpg'
      }]
      res.render('places/index', {places})
})

module.exports = router


