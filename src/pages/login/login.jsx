import React from 'react'
import Navbar from '../../components/nav/navbar';

export default function Login() {
  return (
    <div>{ false ? <div>hi<form onClick={()=> localStorage.clear()}>
      <button type='submit' >logout</button>
      </form>
      </div>:  
      <div className='page-div'>
            <Navbar />
        
            <div className='d-flex flex-column'>
                <div className='text-center'>
                  <p className='fs-2'>Sign in to your account</p>
                </div>
                <div className='form-div '>
                <form className="d-flex flex-column h-100 gap-4" method='post'>
            
                      <div  className='input-group m-0'> 
                          <input type="email" className='form-control'
                                  name="email" placeholder="E-mail" required id='email' />
                      </div>
                        <div className='input-group m-0'>  
                            <input type="password" className='form-control'
                                name="password" placeholder="Password" required id='password'  />
                        </div>
                        <div className='input-group d-flex m-0 p-0 flex-row '>
                                  <input className="form-check-input text-dark ms-2 py-2" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="ps-3 flex-fill label-word" htmlFor="flexCheckChecked">
                                    Show password
                                    </label>
                                  <a href='#' className='text-dark reset-link label-word me-0 float-right'>Forgot Password?</a>
                        </div>
                        <div  className='input-group m-0 align-self-baseline btn-div'>
                            <button type="submit" onClick={(e)=>{
                              e.preventDefault();
                              }}  className='btn btn-dark form-control'>Submit</button>
                        </div>
            
        </form>
   
                </div>
                <div className='text-center'>
                  <p>Don't have an account? Sign Up</p>
                </div>
            </div>
        </div> }
      </div>
  )
}
