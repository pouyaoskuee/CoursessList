import './App.css'

function App() {

  return (

      <div className="App">
          <div className="header">
              <h1>my courses</h1>
              <nav className="nav">
                  <ul>
                      <li>all</li>
                      <li>active</li>
                      <li>completed</li>
                      <li>Uncompleted</li>
                  </ul>
              </nav>
          </div>
          <div className="contents">
              <div className="content">
                  <img src='/javascript.svg' alt='JavaScript'/>
                  <div className="content__description">
                      <h2>description</h2>
                      <div className="description__paragraph">
                          <p>Lorem ipsum dolor sit amet</p>
                          <span>4.5</span>
                      </div>
                      <div className="description__category">
                          <span className='budge'>ui ux</span>
                          <span className='budge'>frontend</span>
                      </div>
                      <div className="description__footer">
                          <span className='date'>jun 14 2025</span>
                          <span className='budge'>completed</span>
                      </div>
                  </div>

              </div>
          </div>
      </div>



  )
}

export default App
