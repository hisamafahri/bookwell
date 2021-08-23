import React from 'react'
import Login from './routes/Login'
import { Route } from 'react-router-dom'
import Company from './routes/Company'
import Vendor from './routes/Vendor'

function App() {

  return (
    <div>
      <Route exact path='/' component={ Login } />
      <Route exact path='/company' component={ Company } />
      <Route exact path='/vendor' component={ Vendor } />
    </div>
  )
}

export default App
