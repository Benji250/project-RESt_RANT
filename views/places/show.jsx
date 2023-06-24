const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className='inactive'>
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className='inactive'>
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.starts
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += 'â­ï¸'
    }
    rating = (
      <h3>
       {stars} stars
      </h3>
    )
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          {rating}
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type='submit' className='btn btn-danger' value='Delete Comment'/>   
          </form>
        </div>
      )
    })
  }
  //work on part 10, part 4 implement a comment form
  // let message = ""
  // if (data.message) {
  //     message = (
  //         <h4 className="alert-dnager">
  //             {data.message}
  //         </h4>
  //     )
  // }
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <div>
          <h2>
            Rating
          </h2>
          <p>Not Rated</p>
        </div>
        <div>
          <h2>
            Comments
          </h2>
          {comments}
          <p>No Comments Yet!</p>
        </div>
        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
          <i className="bi bi-pencil"></i> Edit
        </a>
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className='btn btn-danger'>
            <i className="bi bi-trash"></i> Delete
          </button>
        </form>
      </main>
    </Def>
  )
}

module.exports = show

