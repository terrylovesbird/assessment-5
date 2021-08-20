import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage.js'
import ShopPage from './pages/ShopPage.js'
import TestPage from './pages/TestPage.js'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shops/:shopAlias" component={ShopPage} />
            <Route exact path="/t/" component={TestPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App

