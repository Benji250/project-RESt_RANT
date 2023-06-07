const router = require('express').Router()
const places = require ('../modles/places.js')

//NEW
router.post('/new' (req, res) => {
  res.render('places/new')
})

//POST
router.post('/', (req,res) =>{
  // console.log(req.body)
  console.log(req.body)
  if (!req.body.pic) {
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
    // let places = [{
    //     name: 'H-Thai-ML',
    //     city: 'Seattle',
    //     state: 'WA',
    //     cuisines: 'Thai, Pan-Asian',
    //     pic: 'public/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
    //   }, {
    //     name: 'Coding Dog Cafe',
    //     city: 'Phoenix',
    //     state: 'AZ',
    //     cuisines: 'Coffee, Bakery',
    //     pic: 'public/images/charlesdeluvio-_p-DIj5LJKc-unsplash.jpg'
    //   }]

    //INDEX
    router.get('/', (req, res) => {
      res.render('places/index', {places})
    })

    //SHOW
    router.get('/:id', (req, res) => {
      res.render('places/edit')
      let id = Number(req.params.id)
      if (isNaN(id)){
        res.render('error404')
      }
      else if (!places[id]){
          res.render(error404)
      }
      else {
        places.splice(id, 1)
        res.redirect('/places/edit', { place: places[id] })
      }
    })


module.exports = router


