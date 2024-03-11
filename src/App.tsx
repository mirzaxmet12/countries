import { observer } from 'mobx-react-lite'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import cardCountries from './CardCountries'
import Country from './Country'
import Home from './Home'
import Thema from './Thema'


const App = observer(() => {

  return (

    <BrowserRouter>
      <div className={cardCountries.themeClassName}>
        <div className="header">
          <div className="container">
            <Thema />
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Country />}>
          </Route>
        </Routes>
      </div >
    </BrowserRouter >
  )
})

export default App
