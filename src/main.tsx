import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './index.css'
import Routers from './Routers/Index'
import './index.css'

const Loading = () => {
  return (
    <div className='fixed z-[888888] top-0 flex items-center justify-center left-0 bg-white w-screen h-screen flex items-centerjustify-center'>
      <p>Loading...</p>
    </div> 
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
        {
            Routers.map((router, index) => (
              <Route  
                key={index}
                path={router.path}
                element={<router.component />}
              />
            ))
          }
        </Routes>
      </Suspense>
    </Router>
</React.StrictMode>,
)
