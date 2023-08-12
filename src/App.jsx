import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Hotel from './pages/hotel/Hotel'
import List from './pages/list/List'


function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/hotel" element = {<Hotel/>}></Route>
          <Route path = "/list" element = {<List/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
