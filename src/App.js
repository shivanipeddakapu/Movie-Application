import { BrowserRouter,Routes,Route } from "react-router-dom"
import React from "react"
import Parts from "./Parts"
import Infopage from "./pages/Infopage"
const App = () => {
 return(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Parts/>}></Route>
  <Route path="/inner" element={<Infopage/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
 )
    
    
}

export default App