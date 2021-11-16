import React, { useState } from 'react';
import Header2 from '../../components/Header2';
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {

  return (
    <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <Header2 className='header' />
      </div>
      <div className='col-12'>

      </div>
      <div className='col-6 signin-form'>
        <SignUpForm /> 
      </div>
    </div>
  </div>

  )
}

export default SignUp;