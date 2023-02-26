import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import SignIn from './SignIn'

function index() {
  return (
    <>

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default index
