const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="public/images/matthew-henry-2Ts5HnA67k8-unsplash.jpg" alt="Sad dog" />
                <div>
                  Photo by <a href="hhttps://unsplash.com/photos/2Ts5HnA67k8"/> on <a herf="https://unsplash.com/photos/2Ts5HnA67k8"/>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
