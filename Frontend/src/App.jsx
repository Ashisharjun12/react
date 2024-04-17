import React from 'react'
import Home from './Components/Home/Home'

import { Route ,Routes} from 'react-router-dom'

import Cour from './Components/Cour/Cour'
import Login from './Components/Login'
import SignUp from './Components/SignUp'

function App() {
  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Cour' element={<Cour/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>

   </Routes>
    </>
  )
}

export default App