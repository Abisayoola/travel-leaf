import React from 'react'
import image from '../../assets/Rectangle 42.png'

function login() {
  return (
    <div className='logincontainer'>
      <div className='logindetail'>
        <h1>Welcome back</h1>
        <p>Login to continue where you left off</p>
        <button>Continue with Google</button>
        <input placeholder='Enter your name' type='text' title='Full name'/>
        <input placeholder='yourmail@mail.com' type='text' title='Email'/>
      </div>
      <img alt='' src={image}></img>
    </div>
  )
}

export default login
