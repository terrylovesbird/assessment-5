import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage.js'
import ShopPage from './pages/ShopPage.js'
import MarkedShopListPage from './pages/MarkedShopListPage.js'
import MarkedShopPage from './pages/MarkedShopPage.js'

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shops/:shopAlias" component={ShopPage} />
          <Route exact path="/marked" component={MarkedShopListPage} />
          <Route exact path="/marked/:markId" component={MarkedShopPage} />
        </Switch>
    </Router>
      // <div>
      //   <BrowserRouter>
      //     <div>
      //       <Route exact path="/" component={HomePage} />
      //       <Route exact path="/shops/:shopAlias" component={ShopPage} />
      //       <Route exact path="/marked/" component={MarkedPage} />
      //     </div>
      //   </BrowserRouter>
      // </div>
    )
  }
}

export default App

