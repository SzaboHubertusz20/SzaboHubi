import { StrictMode, useState } from 'react'
import { BrowserRouter, Route, Routes as Routers } from 'react-router-dom'
import Home from './Home'
import Regiok from './Regiok'
import Torolni from './torolni'
import Regisztaracio from './Regisztracio'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ujb from './Ujb'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Routers>
          <Route path='/' element={<Home />} />
          <Route path='/regiok' element={<Regiok />} />
          <Route path='/torolni' element={<Torolni />} />
          <Route path='/regisztracio' element={<Regisztaracio />} />
          <Route path='/ujregisztracio' element={<Ujb />} />
        </Routers>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
