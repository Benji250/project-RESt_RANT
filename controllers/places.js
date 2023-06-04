const router = require('express').Router()

router.get('/', (req,res) =>{
    let places = []
    router.get('/new', (req, res) => {
      res.render('places/index')
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
