const React = require('react')
const Def = require('../default')

function show (data) {
    let message = ""
    if (data.message) {
        message = (
            <h4 className="alert-dnager">
                {data.message}
            </h4>
        )
    }
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
