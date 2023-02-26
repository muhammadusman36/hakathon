import React from 'react'


import Header from '../../components/Frontend/Header'
import Footer from '../../components/Frontend/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import { ToastContainer } from "react-toastify"
import AddEvent from './AddEvent/AddEvent'
import PrivateRoute from '../../private/PrivateRoute'
import TrendingEvents from './TrendingEvents'
import MyEvents from './MyEvents/MyEvents'
export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addEvents' element={<PrivateRoute Component={<AddEvent />} />} />
          <Route path='/trendingEvents' element={<TrendingEvents />} />
          <Route path='/myEvents' element={<PrivateRoute Component={<MyEvents />} />} />
        </Routes>
        <ToastContainer />

      </main>
      <Footer />
    </>
  )
}
