import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'  
import Footer from './components/Footer' 
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import {Toaster} from 'react-hot-toast'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddShows from './pages/admin/AddShows'
import ListShows from './pages/admin/ListShows'
import ListBookings from './pages/admin/ListBookings'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')


  return (

    <>

    <Toaster/>
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/movies/:id' element={<MovieDetails/>}></Route>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}></Route>
        <Route path='/my-bookings' element={<MyBookings/>}></Route>
        <Route path='/favourite' element={<Favourite/>}></Route>
        <Route path='/admin/*' element={<Layout/>}>
            <Route index element = {<Dashboard/>}/>
            <Route path='add-shows' element = {<AddShows/>}/>
            <Route path='list-shows' element = {<ListShows/>}/>
            <Route path='list-bookings' element = {<ListBookings/>}/>
        </Route>

      </Routes>

      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
