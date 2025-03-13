import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import MyFlight from './pages/MyFlight'

import Search from './pages/Search'
import MyBookings from './pages/MyBookings'



function App() {
  

  return (
    <>
        
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="registration" element={<Registration/>}/>
      <Route path="login" element={<Login/>}/>
       <Route path="myflight/:id" element={<MyFlight/>}/>
       <Route path="search" element={<Search/>}/>
     





      </Route>
     
   
    </Routes>
    <Routes>
     <Route path="dashboard" element={<Dashboard/>}>
  
    <Route path = "myBookings"  element = {<MyBookings/>  }/>
     
    </Route>
    </Routes>
     


   

   
    </BrowserRouter>

    </>
  )
}

export default App
