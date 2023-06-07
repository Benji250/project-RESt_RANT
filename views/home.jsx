const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="public/images/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg" alt="Person with a view" />
                <div>
                  Photo by <a href="https://unsplash.com/photos/odxB5oIG_iA"/> on <a herf="https://unsplash.com/photos/odxB5oIG_iA"/>
                </div>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
