const element = (
  <div className='bg-container'>
    <h1 className='Main-heading'>Congratulations</h1>
    <div className="sub-card">
    <div className='card'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='img'
      />
      <h1 className='Name'>Kiran V</h1>
      <p className='para'>
        Vishu institute of computer Education and Technology Shimavaram
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='img'
      />
    </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
