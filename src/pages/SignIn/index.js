import React, { useState } from 'react';
import Header2 from '../../components/Header2';
import SignInForm from '../../components/SignInForm'

const SignIn = () => {

  return (
    <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <Header2 className='header' />
      </div>
      <div className='col-12'>

      </div>
      <div className='col-6 signin-form'>
        <SignInForm /> 
      </div>
    </div>
  </div>

  )
}

export default SignIn;