import { StrictMode, useState } from 'react'
import { BrowserRouter, Route, Routes as Routers } from 'react-router-dom'
import Home from './Home'
import Regiok from './Regiok'
import Torolni from './torolni'

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
        </Routers>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
