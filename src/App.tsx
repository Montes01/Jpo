import './App.css'
import { Header } from './Components/Header'
import { Main } from './Components/Main'
import { Shop } from './Components/Shop'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (

    
    <BrowserRouter><body>
      <Header/>
      <Routes>
        <Route path='/' Component={Main}></Route>
        <Route path='/Shop' Component={Shop}></Route>
      </Routes>
      <footer id="footer">
        <p>&copy; 2023 Juan Esteban Henao</p>
      </footer>
    </body>

    </BrowserRouter>
  )
}

export default App
