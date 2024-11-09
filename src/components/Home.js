import React from 'react'

const Home = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center align-items-center min-vh-100'>
        <div className='col-12 col-md-6'>
            <div className='card shadow-sm p-2 mb-5 bg-secondary text-white rounded'>
                  <div className='card-body text-center bg-dark'>
                   <img src="/images/evo.png" alt="logo" className='rounded-circle'/>
                   <h1 className='mt-3'>EVO Real-Time Code</h1>
                   <div className='form-group mt-4 mb-2'>
                        <input type="text" className="form-control mb-2" placeholder="ROOM ID"/>
                        
                   </div>
                   <div className='form-group'>
                        <input type="text" className="form-control mb-2" placeholder="USERNAME"/>
                   </div>
                   <button type="button" className="btn btn-primary btn-lg btn-block">JOIN ROOM</button>
                  </div>  
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default Home
